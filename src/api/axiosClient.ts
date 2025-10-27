import axios from "axios"

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json" }
})

// Tự động gán accessToken
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// xử lí lỗi respone từ be
axiosClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const status = error.respone?.status
        const message = error.respone?.data?.message || {}

        if (status === 401) {
            localStorage.removeItem("accessToken")
            window.location.href = "/login"
        }
        console.error(message)
        return Promise.reject(error)
    }
)

export default axiosClient
