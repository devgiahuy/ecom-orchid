import { QUERY_KEY } from "@/constants/queryKey"
import type { UserDataReq } from "@/model/user"
import { userApi } from "@/service/userApi"
import { addToast } from "@heroui/toast"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useCreateUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: UserDataReq) => {
            const res = userApi.create(payload)
            return res
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.USERS] })
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

export const useGetByEmail = (email: string, { enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.USERS, email],
        queryFn: () => {
            const res = userApi.getByEmail(email)
            const users = res
            return users || null
        },
        enabled
    })
    return query
}

export const useGetAllUsers = ({ enabled = true }: { enabled?: boolean } = {}) => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: [...QUERY_KEY.USERS],
        queryFn: () => userApi.getAll(),
        initialData: () => {
            return queryClient.getQueryData<UserDataReq[]>([...QUERY_KEY.USERS])
        },
        enabled
    })
    return query
}

export const useGetByIduser = (id: string, { enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.USERS, id],
        queryFn: () => userApi.getById(id),
        enabled
    })
    return query
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: userApi.update,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.USERS] })
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
