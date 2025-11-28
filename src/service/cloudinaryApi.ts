// import { http } from "@/api/http"

// const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
// const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
// const FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER ?? "ecom-orchid/products"
// const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

// export type CloudinaryUploadRes = {
//     asset_id: string
//     public_id: string
//     secure_url: string
//     width: number
//     height: number
//     format: string
//     [key: string]: any
// }

// if (!CLOUD_NAME || !UPLOAD_PRESET) {
//     throw new Error("Cloudinary configuration is missing")
// }

// export const cloudinaryApi = {
//     uploadImange: async (file: File) => {
//         const formData = new FormData()
//         formData.append("file", file)
//         formData.append("upload_preset", UPLOAD_PRESET)
//         formData.append("folder", FOLDER)
//         return http.post<CloudinaryUploadRes>(CLOUDINARY_UPLOAD_URL, formData)
//     }
// }
// src/apis/cloudinaryApi.ts
import axios from "axios"

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
const FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER ?? "ecom-orchid/products"

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

export type CloudinaryUploadRes = {
    public_id: string
    secure_url: string
    [key: string]: any
}

export const cloudinaryApi = {
    uploadImage(file: File) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", UPLOAD_PRESET)
        formData.append("folder", FOLDER)

        // ❗ KHÔNG set 'Content-Type', để browser tự set boundary
        return axios
            .post<CloudinaryUploadRes>(CLOUDINARY_UPLOAD_URL, formData)
            .then((res) => res.data)
    }
}
