export interface Category {
    id: string
    name: string
    description: string
    createdAt?: string
}

export interface CategoryReq {
    name?: string
    description?: string
}
