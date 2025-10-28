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
            } else {
                setFirebaseUser(null)
                setUserData(null)
                setRole("guest")
                localStorage.removeItem("accessToken")
            }
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (!firebaseUser) return
        const fetchUserFromDB = async () => {
            // if (!firebaseUser) return

            setLoading(true)
            const email = firebaseUser.email
            try {
                const userGetByEmail = await userApi.getByEmail(email!)
                const user = userGetByEmail
                if (user) {
                    setUserData(user)
                    setRole(user.role as Role)
                } else {
                    const newUser: UserDataReq = {
                        name: firebaseUser.displayName || "Người dùng mới",
                        email: firebaseUser.email!,
                        avatar: firebaseUser.photoURL || "",
                        role: "user"
                    }
                    const created = await createUser.mutateAsync(newUser)
                    setUserData(created)
                    setRole("user")
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUserFromDB()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firebaseUser])

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
