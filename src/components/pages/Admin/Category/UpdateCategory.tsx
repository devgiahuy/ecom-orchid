import { useGetCategoryById, useUpdateCategory } from "@/hooks/queries/useCategory"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ButtonStyled, InputStyled } from "@/components/styled"
import { useParams } from "react-router-dom"
import { Spinner } from "@heroui/react"

export default function UpdateCategory() {
    const { id } = useParams()
    const categoryId = id!
    const { data: category, isLoading } = useGetCategoryById(categoryId)
    const updateCategory = useUpdateCategory()

    // 🪴 Khởi tạo form
    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên danh mục là bắt buộc."),
            description: Yup.string().required("Mô tả không được để trống.")
        }),
        onSubmit: async (values) => {
            await updateCategory.mutateAsync({ id: categoryId, req: values })
        },
        enableReinitialize: true // ✅ cập nhật lại giá trị khi category fetch xong
    })

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <Spinner color="success" />
            </div>
        )

    return (
        <section
            className="
        max-w-xl mx-auto mt-10 p-8 rounded-3xl shadow-md
        border border-green-100 dark:border-gray-800
        bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm
        transition-colors duration-300
      "
        >
            <h2 className="text-2xl font-semibold text-center mb-6 text-green-600 dark:text-green-400">
                Cập Nhật Danh Mục
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Name */}
                <InputStyled
                    label="Tên danh mục"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                    errorMessage={formik.touched.name ? formik.errors.name : ""}
                    variant="bordered"
                    radius="lg"
                    color="success"
                />

                {/* Description */}
                <InputStyled
                    label="Mô tả"
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.touched.description && !!formik.errors.description}
                    errorMessage={formik.touched.description ? formik.errors.description : ""}
                    variant="bordered"
                    radius="lg"
                    color="success"
                />

                {/* Submit */}
                <div className="text-center pt-4">
                    <ButtonStyled
                        type="submit"
                        isDisabled={updateCategory.isPending}
                        className="
              px-6 py-2 rounded-xl text-white font-semibold
              bg-primary hover:bg-green-700 transition-all
            "
                    >
                        {updateCategory.isPending ? "Đang cập nhật..." : "Cập nhật danh mục"}
                    </ButtonStyled>
                </div>
            </form>
        </section>
    )
}
