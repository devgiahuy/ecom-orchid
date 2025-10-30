import { http } from "@/api/http"
import type { CategoryReq } from "@/model/category"

export const categoryApi = {
    getAll: () => http.get<CategoryReq[]>("/categories"),
    getById: (id: string) => http.get<CategoryReq>(`/categories/${id}`),
    create: (req: CategoryReq) => http.post<void>("/categories", req),
    update: ({ id, req }: { id: string; req: CategoryReq }) =>
        http.put<void>(`/categories/${id}`, req),
    delete: (id: string) => http.delete<void>(`/categories/${id}`)
}
