import { http } from "@/api/http"
import type { Feedback, FeedbackReq, FeedbackRes } from "@/model/feedback"

export const feedbackApi = {
    getAll: () => http.get<Feedback[]>("/feedbacks"),
    getById: (id: string) => http.get<Feedback[]>(`/feedbacks/${id}`),
    getByOrchidId: (orchidId: string) => http.get<FeedbackRes[]>(`/feedbacks?orchidId=${orchidId}`),
    create: (req: FeedbackReq) => http.post<void>("/feedbacks", req),
    update: (id: string, req: FeedbackReq) => http.put<void>(`/feedbacks/${id}`, req),
    delete: (id: string) => http.delete<void>(`/feedbacks/${id}`)
}
