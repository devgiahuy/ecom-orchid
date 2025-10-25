import React, { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth"
import type { Role, UserData } from "../model/user"
import { auth, googleProvider } from "../service/firebase"
import { userApi } from "../service/userApi"

type AuthContextType = {
    firebaseUser: User | null
    userData: UserData | null
    role: Role
    loading: boolean
    loginWithGoogle: () => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [role, setRole] = useState<Role>("guest")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setFirebaseUser(user)
                // Lấy user trong MockAPI
                const existing = await userApi.getByEmail(user.email!)
                if (existing) {
                    setUserData(existing)
                    setRole(existing.role as Role)
                } else {
                    // Nếu là user mới, tạo mặc định role user
                    const newUser: UserData = {
                        name: user.displayName || "Người dùng mới",
                        email: user.email!,
                        avatar: user.photoURL || "",
                        role: "user"
                    }
                    const created = await userApi.createUser(newUser)
                    setUserData(created)
                    setRole("user")
                }
            } else {
                setFirebaseUser(null)
                setUserData(null)
                setRole("guest")
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const loginWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
    }

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <AuthContext.Provider
            value={{ firebaseUser, userData, role, loading, loginWithGoogle, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context
}
