import { isAxiosError } from "axios"

export interface ApiResult<T> {
    data: T | null
    error: string | null
}

export async function wrapper<T>(promise: Promise<T>): Promise<ApiResult<T>> {
    try {
        const data = await promise
        return { data, error: null }
    } catch (err) {
        let message = "Unknown error"
        if (isAxiosError(err)) {
            message = (err.response?.data as any)?.message || err.message || "Request failed"
        }
        return { data: null, error: message }
    }
}
