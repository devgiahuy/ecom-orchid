import type { Orchid } from "../model/orchid"
import { http } from "../api/http"
export const orchidApi = {
    getAll: () => http.get<Orchid[]>("/orchids"),
    getById: (id: number) => http.get<Orchid>(`/orchids/${id}`),
    create: (payload: Orchid) => http.post<void>("/orchids", payload),
    delete: (id: number) => http.delete<void>(`/orchids/${id}`)
}
