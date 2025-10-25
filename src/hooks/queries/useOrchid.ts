import type { Orchid } from "../../model/orchid"
import { orchidApi } from "../../service/orchidApi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEY } from "../../constants/queryKey"

// export function useGetAllOrchids() {
//     const [data, setData] = useState<Orchid[] | null>(null)
//     const [error, setError] = useState<string | null>(null)
//     const [loading, setLoading] = useState(false)

//     const fetch = useCallback(async () => {
//         setLoading(true)
//         const res = await orchidApi.getAll()
//         setData(res.data)
//         setError(res.error)
//         setLoading(false)
//     }, [])

//     return { data, error, loading, refetch: fetch }
// }

export const useGetAllOrchids = () => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: [...QUERY_KEY.ORCHIDS],
        queryFn: () => orchidApi.getAll(),
        initialData: () => {
            return queryClient.getQueryData<Orchid[]>([...QUERY_KEY.ORCHIDS])
        }
        // enabled
    })
    return query
}

export const useCreateOrchid = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: orchidApi.create,
        onSuccess: async () => {
            // toast
            await queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.ORCHIDS] })
        },
        onError: (err: Error) => {
            toast.error(err.message)
        }
    })
}
// export function useGetOrchidById() {
//     const [data, setData] = useState<Orchid | null>(null)
//     const [error, setError] = useState<string | null>(null)
//     const [loading, setLoading] = useState(false)

//     const fetch = useCallback(async (id: number) => {
//         setLoading(true)
//         const res = await orchidApi.getById(id)
//         setData(res.data)
//         setError(res.error)
//         setLoading(false)
//     }, [])

//     return { data, error, loading, fetch }
// }

// ===========Example ===============
// export const useCreateOrchid = () => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: orchidApi.createVoid, // ✅ không cần data
//         onSuccess: () => {
//             toast.success("Thêm hoa lan thành công!")
//             queryClient.invalidateQueries({ queryKey: ["orchids"] })
//         },
//         onError: (err: Error) => {
//             toast.error(err.message)
//         }
//     })
// }

// return useMutation({
//   mutationFn: orchidApi.create, // ✅ return Orchid
//   onSuccess: (newOrchid) => {
//     queryClient.setQueryData(["orchids"], (prev: Orchid[] = []) => [...prev, newOrchid])
//     toast.success("Thêm hoa lan thành công!")
//   }
// })

// ================================
