import type { Orchid, OrchidReq } from "../../model/orchid"
import { orchidApi } from "../../service/orchidApi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEY } from "../../constants/queryKey"
import { addToast } from "@heroui/toast"
import { useNavigate } from "react-router-dom"

export const useGetAllOrchids = ({ enabled = true }: { enabled?: boolean } = {}) => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: [...QUERY_KEY.ORCHIDS],
        queryFn: () => orchidApi.getAll(),
        initialData: () => {
            return queryClient.getQueryData<Orchid[]>([...QUERY_KEY.ORCHIDS])
        },
        enabled
    })
    return query
}

export const useGetOrchidById = (id: string, { enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.ORCHIDS, id],
        queryFn: () => orchidApi.getById(id),
        enabled
    })
    return query
}

export const useCreateOrchid = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (payload: OrchidReq) => {
            const res = await orchidApi.create(payload)
            return res
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.ORCHIDS] })
            addToast({
                title: "Create",
                description: "Create successfully",
                color: "success"
            })
            navigate("admin/dashboard")
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

export const useUpdateOrchid = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: orchidApi.update,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.ORCHIDS] })
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

export const useDeleteOrchid = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await orchidApi.delete(id)
            return res
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.ORCHIDS] })
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
