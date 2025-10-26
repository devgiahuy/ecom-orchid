import { axiosClient } from "./axiosClient"
import { wrapper } from "./wrapper"

export const http = {
    get: <T>(url: string, params?: object) => wrapper<T>(axiosClient.get(url, { params })),
    post: <T>(url: string, body?: any) => wrapper<T>(axiosClient.post(url, body)),
    put: <T>(url: string, body?: any) => wrapper<T>(axiosClient.put(url, body)),
    delete: <T>(url: string) => wrapper<T>(axiosClient.delete(url))
}
