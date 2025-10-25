export type Role = "guest" | "user" | "admin"

export interface UserData {
    id?: string
    name: string
    email: string
    role: Role
    avatar?: string
}
