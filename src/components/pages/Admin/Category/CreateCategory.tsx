import { ButtonStyled, InputStyled } from "@/components/styled"
import { useCreateCategory } from "@/hooks/queries/useCategory"
import { useFormik } from "formik"
import * as Yup from "yup"

export function CreateCategory() {
    const createCategory = useCreateCategory()

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            createdAt: new Date().toISOString()
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên danh mục là bắt buộc."),
            description: Yup.string().required("Mô tả không được để trống.")
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await createCategory.mutateAsync(values)
                resetForm()
            } catch (error) {
                console.error("Tạo category thất bại:", error)
            }
        }
    })

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
                Tạo Danh Mục Mới
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Name field */}
                <div>
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
                </div>

                {/* Description field */}
                <div>
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
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                    <ButtonStyled
                        type="submit"
                        isDisabled={createCategory.isPending}
                        className="
              px-6 py-2 rounded-xl text-white font-semibold
              bg-primary transition-all hover:shadow-lg hover:text-black
            "
                    >
                        {createCategory.isPending ? "Đang tạo..." : "Tạo danh mục"}
                    </ButtonStyled>
                </div>
            </form>
        </section>
    )
}
