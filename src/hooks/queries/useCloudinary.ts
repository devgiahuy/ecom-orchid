import { cloudinaryApi } from "@/service/cloudinaryApi"
import { addToast } from "@heroui/toast"
import { useMutation } from "@tanstack/react-query"

export const useUploadImage = () => {
    return useMutation({
        mutationFn: async (file: File) => {
            const res = await cloudinaryApi.uploadImage(file)
            return res
        },
        // onSuccess: () => {
        //     addToast({
        //         title: "Create",
        //         description: "Create successfully",
        //         color: "success"
        //     })
        // },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: err.message ?? "Upload failed",
                color: "danger"
            })
        }
    })
}
