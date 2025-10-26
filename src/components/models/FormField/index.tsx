import { InputStyled } from "@/components/styled"

export function FormField({
    icon,
    label,
    name,
    type = "text",
    formik
}: {
    icon: React.ReactNode
    label: string
    name: string
    type?: string
    formik: any
}) {
    const error = formik.touched[name] && formik.errors[name]
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={name}
                className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300"
            >
                <span className="text-green-500">{icon}</span> {label}
            </label>
            <InputStyled
                id={name}
                name={name}
                type={type}
                variant="bordered"
                color="success"
                radius="full"
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={`Nhập ${label.toLowerCase()}`}
                isInvalid={!!error}
                errorMessage={error as string}
            />
        </div>
    )
}
