export type AuthState = {
    user: any | null
    token: string | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}
