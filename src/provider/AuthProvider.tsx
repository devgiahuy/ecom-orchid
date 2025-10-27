import React, { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth"
import type { Role, UserData, UserDataReq } from "../model/user"
import { auth, googleProvider } from "../service/firebase"
import { useCreateUser } from "@/hooks/queries/useUser"
import { userApi } from "@/service/userApi"

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

    const createUser = useCreateUser()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setLoading(true)
            if (user) {
                const idToken = await user.getIdToken()

                localStorage.setItem("accessToken", idToken)
                setFirebaseUser(user)

                // check user trong db
                const email = user.email!

                const existing = await userApi.getByEmail(email)

                if (existing) {
                    setUserData(existing)
                    setRole(existing.role as Role)
                } else {
                    // nếu chưa tồn tại => create new
                    const newUser: UserDataReq = {
                        name: user.displayName || "Người dùng mới",
                        email: user.email!,
                        avatar: user.photoURL || "",
                        role: "user"
                    }
                    const created = await createUser.mutateAsync(newUser)
                    setUserData(created)
                    setRole("user")
                }
            } else {
                // signout
                setFirebaseUser(null)
                setUserData(null)
                setRole("guest")
                localStorage.removeItem("accessToken")
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [createUser])

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
