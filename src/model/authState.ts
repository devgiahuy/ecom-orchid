export type AuthState = {
    user: any | null
    token: string | null
    loading: boolean
    // eslint-disable-next-line no-unused-vars
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}
