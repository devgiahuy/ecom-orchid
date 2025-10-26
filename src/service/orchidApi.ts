import type { Orchid, OrchidReq } from "../model/orchid"
import { http } from "../api/http"
export const orchidApi = {
    getAll: () => http.get<Orchid[]>("/orchids"),
    getById: (id: string) => http.get<Orchid>(`/orchids/${id}`),
    create: (req: OrchidReq) => http.post<void>("/orchids", req),
    update: ({ id, req }: { id: string; req: OrchidReq }) => http.put<void>(`/orchids/${id}`, req),
    delete: (id: string) => http.delete<void>(`/orchids/${id}`)
}
