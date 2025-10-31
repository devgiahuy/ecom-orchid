import { QUERY_KEY } from "@/constants/queryKey"
import { feedbackApi } from "@/service/feedbackApi"
import { addToast } from "@heroui/toast"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export const useGetAllFeedbacks = ({ enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.FEEDBACKS],
        queryFn: () => feedbackApi.getAll(),
        enabled
    })
    return query
}

export const useGetFeedbackById = (id: string, { enabled = true }: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.FEEDBACKS, id],
        queryFn: () => feedbackApi.getById(id),
        enabled
    })
    return query
}

export const useCreateFeedback = () => {
    return useMutation({
        mutationFn: feedbackApi.create,
        onSuccess: () => {
            addToast({
                title: "Create",
                description: "Create successfully",
                color: "success"
            })
        },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: err.message,
                color: "danger"
            })
        }
    })
}

export const useDeleteFeedback = () => {
    const queryClient = useQueryClient()
    // const navigate = useNavigate()

    return useMutation({
        mutationFn: feedbackApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.FEEDBACKS] })
            addToast({
                title: "Delete",
                description: "Delete successfully",
                color: "success"
            })
        },
        onError: (err: Error) => {
            addToast({
                title: "Error",
                description: err.message,
                color: "danger"
            })
        }
    })
}

export const useGetFeedbackByOrchidId = (
    orchidId: string,
    { enabled = true }: { enabled?: boolean } = {}
) => {
    const query = useQuery({
        queryKey: [...QUERY_KEY.FEEDBACKS, orchidId],
        queryFn: () => feedbackApi.getByOrchidId(orchidId),
        enabled
    })
    return query
}
