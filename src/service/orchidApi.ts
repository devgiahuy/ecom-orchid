import type { Orchid, OrchidReq } from "../model/orchid"
import { http } from "../api/http"
export const orchidApi = {
    getAll: () => http.get<Orchid[]>("/orchids"),
    getById: (id: string) => http.get<Orchid>(`/orchids/${id}`),
    // getByName: (name: string) => http.get<Orchid>(`/orchids?name=${name}`),
    create: (req: OrchidReq) => http.post<void>("/orchids", req),
    update: ({ id, req }: { id: string; req: OrchidReq }) => http.put<void>(`/orchids/${id}`, req),
    delete: (id: string) => http.delete<void>(`/orchids/${id}`),
    // search: (keyword: string) => http.get<Orchid[]>(`/orchids?name=${keyword}`)
    search: (keyword: string) =>
        http.get<Orchid[]>(`/orchids?name_like=${encodeURIComponent(keyword)}`)
}
