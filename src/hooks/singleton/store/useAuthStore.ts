import { create } from "zustand"
import { removeToken, setToken } from "../../../utils/tokent"
import { authApi } from "../../../service/useAuthApi"
import type { AuthState } from "../../../model/authState"

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    loading: false,

    // login: async (email, password) => {
    //     set({ loading: true })
    //     const { data, error } = await authApi.login(email, password)
    //     if (data) {
    //         setToken(data.token)
    //         set({ user: data.user, token: data.token, loading: false })
    //     } else {
    //         console.log(error)
    //         set({ loading: false })
    //     }
    // },

    login: async (email, password) => {
        set({ loading: true })
        try {
            const data = await authApi.login(email, password)
            setToken(data.token)
            set({ user: data.user, token: data.token, loading: false })
        } catch (error) {
            console.log(error)
            set({ loading: false })
        }
    },

    logout: () => {
        removeToken()
        set({ user: null, token: null })
    },

    loginWithGoogle: async () => {
        set({ loading: true })
        try {
            const { user, token } = await authApi.loginWithGoogle()
            setToken(token)
            set({ user, token, loading: false })
        } catch (error) {
            console.error(error)
            set({ loading: false })
        }
    }
}))
