// use useFormik and yup to create a feedback form with validation
import { useFormik } from "formik"
import * as Yup from "yup"
import { Textarea } from "@heroui/react"
import { useCreateFeedback } from "@/hooks/queries/useFeedback"
import { useAuth } from "@/provider/AuthProvider"
import { ButtonStyled, InputStyled } from "@/components/styled"
import { useState } from "react"
import { Star } from "lucide-react"

export default function CreateFeedback({ orchidId }: { orchidId: string }) {
    const { userData } = useAuth()
    const createFeedback = useCreateFeedback()

    const [hovered, setHovered] = useState<number>(0)

    const formik = useFormik({
        initialValues: {
            userId: userData?.id || "",
            author: userData?.email || "",

            orchidId: orchidId,
            title: "",
            comment: "",
            rating: 0,
            createdAt: new Date().toISOString()
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            comment: Yup.string().required("Comment is required"),
            rating: Yup.number()
                .min(1, "rating_required")
                .max(5, "rating_required")
                .required("rating_required")
        }),
        onSubmit: (values) => {
            createFeedback.mutateAsync(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputStyled
                label="Title"
                name="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}
            <Textarea
                label="Comment"
                name="comment"
                placeholder="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.comment && formik.errors.comment && <div>{formik.errors.comment}</div>}

            {/* Rating */}
            <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">Rating</label>

                <div className="flex gap-2 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map((val) => {
                        const isActive = (hovered || formik.values.rating) >= val
                        return (
                            <Star
                                key={val}
                                size={36}
                                strokeWidth={1.5}
                                className={`cursor-pointer transition-colors duration-300 ${
                                    isActive ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                                fill={isActive ? "currentColor" : "none"}
                                onMouseEnter={() => setHovered(val)}
                                onMouseLeave={() => setHovered(0)}
                                onClick={() => formik.setFieldValue("rating", val)}
                            />
                        )
                    })}
                </div>

                {formik.touched.rating && formik.errors.rating && (
                    <p className="text-red-500 text-sm">{formik.errors.rating}</p>
                )}
            </div>

            <ButtonStyled type="submit">Submit</ButtonStyled>
        </form>
    )
}
