import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Button, Card, CardBody, Switch } from "@heroui/react"
import { useCreateOrchid } from "../../../hooks/queries/useOrchid"
import { useNavigate } from "react-router-dom"
import { toast } from "@heroui/react"
import type { Orchid } from "../../../model/orchid"

const validationSchema = Yup.object({
    name: Yup.string().required("Tên hoa lan là bắt buộc"),
    image: Yup.string().url("Phải là một URL hợp lệ").required("Hình ảnh là bắt buộc"),
    price: Yup.number().positive("Giá phải là số dương").required("Giá là bắt buộc"),
    origin: Yup.string().required("Nguồn gốc là bắt buộc"),
    isNatural: Yup.boolean().required("Trạng thái tự nhiên là bắt buộc"),
    color: Yup.string().required("Màu sắc là bắt buộc"),
    category: Yup.string().required("Phân loại là bắt buộc")
})

export default function CreateOrchid() {
    const navigate = useNavigate()
    const createOrchidMutation = useCreateOrchid()

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            price: 0,
            origin: "",
            isNatural: false,
            color: "",
            category: "",
            rating: 0 // Mặc định rating là 0 khi tạo mới
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // API của bạn không cần id khi tạo mới
            const newOrchid: Omit<Orchid, "id"> = values
            createOrchidMutation.mutate(newOrchid as Orchid, {
                onSuccess: () => {
                    toast.success("Tạo hoa lan mới thành công!")
                    navigate("/") // Chuyển về trang chủ sau khi thành công
                },
                onError: (error) => {
                    toast.error(`Có lỗi xảy ra: ${error.message}`)
                }
            })
        }
    })

    return (
        <section className="max-w-2xl mx-auto my-12 px-6 py-10 bg-white dark:bg-gray-900 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                    Tạo Hoa Lan Mới
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Điền thông tin chi tiết về hoa lan của bạn 🌿
                </p>
            </div>

            <Card shadow="none" className="border-none bg-transparent">
                <CardBody className="p-2">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
                        <Input
                            label="Tên hoa lan"
                            name="name"
                            placeholder="Vd: Hồ điệp trắng"
                            variant="bordered"
                            color="success"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMessage={formik.touched.name && formik.errors.name}
                            isInvalid={!!(formik.touched.name && formik.errors.name)}
                        />
                        <Input
                            label="URL Hình ảnh"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            variant="bordered"
                            color="success"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMessage={formik.touched.image && formik.errors.image}
                            isInvalid={!!(formik.touched.image && formik.errors.image)}
                        />
                        {/* Các trường input khác tương tự */}
                        <Input
                            type="number"
                            label="Giá"
                            name="price"
                            placeholder="Vd: 300000"
                            variant="bordered"
                            color="success"
                            value={formik.values.price.toString()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMessage={formik.touched.price && formik.errors.price}
                            isInvalid={!!(formik.touched.price && formik.errors.price)}
                        />
                        {/* ... thêm các trường origin, color, category ... */}

                        <div className="flex items-center justify-between">
                            <label className="text-gray-700 dark:text-gray-300">
                                Là hoa tự nhiên?
                            </label>
                            <Switch
                                name="isNatural"
                                color="success"
                                isSelected={formik.values.isNatural}
                                onValueChange={(checked) =>
                                    formik.setFieldValue("isNatural", checked)
                                }
                            />
                        </div>

                        <Button
                            type="submit"
                            color="success"
                            className="mt-4 font-semibold"
                            isLoading={createOrchidMutation.isPending}
                            disabled={createOrchidMutation.isPending}
                        >
                            {createOrchidMutation.isPending ? "Đang tạo..." : "Tạo Mới"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}
