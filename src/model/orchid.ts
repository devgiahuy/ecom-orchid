export type Orchid = {
    id: string
    name: string
    rating: number
    isSpecial?: boolean
    isNatural?: boolean
    image: string
    color: string
    numberOfLike?: number
    origin: string
    category?: string
    price: number
    linkVideo?: string
}

export type OrchidReq = {
    name: string
    rating: number
    isSpecial?: boolean
    isNatural?: boolean
    image: string
    color: string
    numberOfLike?: number
    origin: string
    category?: string
    price: number
    linkVideo?: string
}
