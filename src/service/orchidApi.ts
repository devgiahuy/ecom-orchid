// src/services/orchidService.ts
import axiosClient from "../api/axiosClient"
import { wrapper } from "../api/wrapper"
import type { Orchid } from "../model/orchid"
export const orchidApi = {
    getAll: () => wrapper(axiosClient.get<Orchid[]>("/orchids")),
    getById: (id: number) => wrapper(axiosClient.get<Orchid>(`/orchids/${id}`)),
    create: (payload: Orchid) => wrapper(axiosClient.post<Orchid>("/orchids", payload)),
    delete: (id: number) => wrapper(axiosClient.delete<void>(`/orchids/${id}`))
}
