import { isAxiosError } from "axios"

export function wrapper<T>(promise: Promise<T>): Promise<T> {
    return promise.catch((err) => {
        let message = "Unknown error"
        if (isAxiosError(err)) {
            const data = err.response?.data
            message =
                (data && (data.message || data.detail || data.error)) ||
                err.message ||
                "Request failed"
        }
        throw new Error(message)
    })
}
