import { QUERY_KEY } from "@/constants/queryKey"
import type { Category, CategoryReq } from "@/model/category"
import { categoryApi } from "@/service/categoryApi"
import { addToast } from "@heroui/toast"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useGetAllCategories = ({ enabled = true }: { enabled?: boolean } = {}) => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: [...QUERY_KEY.CATEGORIES],
        queryFn: () => categoryApi.getAll(),
        initialData: () => {
            return queryClient.getQueryData<Category[]>([...QUERY_KEY.CATEGORIES])
        },
        enabled
    })
    return query
}

export const useGetCategoryById = (id: string, { enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.CATEGORIES, id],
        queryFn: () => categoryApi.getById(id),
        enabled
    })
    return query
}

export const useCreateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (payload: CategoryReq) => {
            const res = await categoryApi.create(payload)
            return res
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["categories"] })
            addToast({
                title: "Create",
                description: "Create successfully",
                color: "success"
            })
        },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: `${err.message}`,
                color: "danger"
            })
        }
    })
}

export const useUpdateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: categoryApi.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
            addToast({
                title: "Update",
                description: "Update successfully",
                color: "success"
            })
        },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: `${err.message}`,
                color: "danger"
            })
        }
    })
}

export const useDeleteCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (id: string) => {
            await categoryApi.delete(id)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["categories"] })
            addToast({
                title: "Delete",
                description: "Delete successfully",
                color: "success"
            })
        },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: `${err.message}`,
                color: "danger"
            })
        }
    })
}
