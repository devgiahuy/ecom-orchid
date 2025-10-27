// import { create } from "zustand"
// import { removeToken, setToken } from "../../../utils/tokent"
// import { authApi } from "../../../service/useAuthApi"
// import type { AuthState } from "../../../model/authState"

// export const useAuthStore = create<AuthState>((set) => ({
//     user: null,
//     token: null,
//     loading: false,

//     // login: async (email, password) => {
//     //     set({ loading: true })
//     //     const { data, error } = await authApi.login(email, password)
//     //     if (data) {
//     //         setToken(data.token)
//     //         set({ user: data.user, token: data.token, loading: false })
//     //     } else {
//     //         console.log(error)
//     //         set({ loading: false })
//     //     }
//     // },

//     login: async (email, password) => {
//         set({ loading: true })
//         try {
//             const data = await authApi.login(email, password)
//             setToken(data.token)
//             set({ user: data.user, token: data.token, loading: false })
//         } catch (error) {
//             console.log(error)
//             set({ loading: false })
//         }
//     },

//     logout: () => {
//         removeToken()
//         set({ user: null, token: null })
//     },

//     loginWithGoogle: async () => {
//         set({ loading: true })
//         try {
//             const { user, token } = await authApi.loginWithGoogle()
//             setToken(token)
//             set({ user, token, loading: false })
//         } catch (error) {
//             console.error(error)
//             set({ loading: false })
//         }
//     }
// }))

import { loginWithGoogleFirebase } from "@/service/firebaseAuthService"
import { authApi } from "@/service/useAuthApi"
import { removeToken, setToken } from "@/utils/tokent"
import { create } from "zustand"

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    loading: false,

    loginWithGoogle: async () => {
        try {
            set({ loading: true })
            const { user, idToken } = await loginWithGoogleFirebase()

            // ✅ gửi thông tin lên mockAPI để lưu user
            await authApi.loginWithGoogle({ email: user.email!, name: user.name!, idToken })

            // ✅ lưu token Firebase tạm như accessToken
            setToken(idToken)
            set({ user, token: idToken, loading: false })
        } catch (err) {
            console.error("Google login failed", err)
            set({ loading: false })
        }
    },

    logout: () => {
        removeToken()
        set({ user: null, token: null })
    }
}))
