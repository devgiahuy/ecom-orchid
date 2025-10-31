import { http } from "@/api/http"
import type { Category, CategoryReq } from "@/model/category"

export const categoryApi = {
    getAll: () => http.get<Category[]>("/categories"),
    getById: (id: string) => http.get<Category>(`/categories/${id}`),
    create: (req: CategoryReq) => http.post<void>("/categories", req),
    update: ({ id, req }: { id: string; req: CategoryReq }) =>
        http.put<void>(`/categories/${id}`, req),
    delete: (id: string) => http.delete<void>(`/categories/${id}`),
    sorted: () => http.get<Category[]>("/categories?_sort=createdAt&_order=desc")
}
