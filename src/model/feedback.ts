import type { UserData } from "./user"

export type Feedback = {
    id: string
    userId: string
    orchidId: string
    comment: string
    rating: number
    author: string
    createdAt: string
}

export type FeedbackReq = {
    userId: string
    orchidId: string
    comment: string
    rating: number
    author: string
    createdAt: string
}

export type FeedbackRes = {
    id: string
    userId: string
    user: UserData
    orchidId: string
    comment: string
    rating: number
    author: string
    createdAt: string
}
