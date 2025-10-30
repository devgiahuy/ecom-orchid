import { useGetCategoryById, useUpdateCategory } from "@/hooks/queries/useCategory"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ButtonStyled, InputStyled } from "@/components/styled"
import { useParams } from "react-router-dom"

export default function UpdateCategory() {
    const { id } = useParams()
    const categoryId = id!
    const { data: category } = useGetCategoryById(categoryId)
    const updateCategory = useUpdateCategory()

    const formik = useFormik({
        initialValues: {
            name: category?.name || "",
            description: category?.description || ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            description: Yup.string().required("Description is required")
        }),
        onSubmit: (values) => {
            updateCategory.mutateAsync({ id: categoryId, req: values })
        }
    })

    return (
        <div className="">
            Update Category Component
            <form onSubmit={formik.handleSubmit}>
                <InputStyled
                    label="Name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <InputStyled
                    label="Description"
                    variant="bordered"
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                <ButtonStyled type="submit">Update</ButtonStyled>
            </form>
        </div>
    )
}
