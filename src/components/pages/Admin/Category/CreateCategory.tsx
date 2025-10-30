import { ButtonStyled, InputStyled } from "@/components/styled"
import { useCreateCategory } from "@/hooks/queries/useCategory"
import { useFormik } from "formik"
import * as Yup from "yup"

export function CreateCategory() {
    //use useFormik to create category form

    const createCategory = useCreateCategory()

    const handleCreateCategory = () => {
        createCategory.mutateAsync(formik.values)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            description: Yup.string().required("Description is required")
        }),
        onSubmit: handleCreateCategory
    })

    return (
        <div className="">
            CreateCategory Component
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
                <ButtonStyled type="submit">Submit</ButtonStyled>
            </form>
        </div>
    )
}
