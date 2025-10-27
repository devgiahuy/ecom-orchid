import { useFormik } from "formik"
import * as Yup from "yup"
import { useCreateOrchid } from "../../../hooks/queries/useOrchid"
import { Button, Card, CardBody, Checkbox } from "@heroui/react"
import { Flower2, Image as ImageIcon, Palette, Tag, Sprout, DollarSign, Star } from "lucide-react"
import { FormField } from "@/components/models"

export default function CreateOrchid() {
    const createOrchid = useCreateOrchid()

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            price: 0,
            isNatural: false,
            isSpecial: false,
            origin: "",
            color: "",
            category: "",
            rating: 0
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên hoa lan là bắt buộc"),
            image: Yup.string().url("Phải là URL hợp lệ").required("Hình ảnh là bắt buộc"),
            price: Yup.number().positive("Giá phải là số dương").required("Giá là bắt buộc"),
            origin: Yup.string().required("Nguồn gốc là bắt buộc"),
            color: Yup.string().required("Màu sắc là bắt buộc"),
            category: Yup.string().required("Phân loại là bắt buộc")
        }),
        onSubmit: (values) => {
            createOrchid.mutateAsync(values)
        }
    })

    return (
        <section
            className="
        max-w-3xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
        transition-colors duration-300
      "
        >
            {/* Background pattern nhẹ */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

            <div className="relative text-center mb-12">
                <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                    Thêm Hoa Lan Mới
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Điền thông tin chi tiết về sản phẩm của bạn để thêm vào cửa hàng
                </p>
            </div>

            <Card
                shadow="sm"
                radius="lg"
                className="bg-white/90 dark:bg-gray-800/90 border border-green-100 dark:border-gray-700 backdrop-blur-sm"
            >
                <CardBody>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
                        <FormField
                            icon={<Flower2 size={18} />}
                            label="Tên hoa lan"
                            name="name"
                            formik={formik}
                        />
                        <FormField
                            icon={<ImageIcon size={18} />}
                            label="URL hình ảnh"
                            name="image"
                            formik={formik}
                        />
                        <FormField
                            icon={<DollarSign size={18} />}
                            label="Giá (VNĐ)"
                            name="price"
                            type="number"
                            formik={formik}
                        />
                        <FormField
                            icon={<Tag size={18} />}
                            label="Phân loại"
                            name="category"
                            formik={formik}
                        />
                        <FormField
                            icon={<Palette size={18} />}
                            label="Màu sắc"
                            name="color"
                            formik={formik}
                        />
                        <FormField
                            icon={<Sprout size={18} />}
                            label="Nguồn gốc"
                            name="origin"
                            formik={formik}
                        />
                        <FormField
                            icon={<Star size={18} />}
                            label="Đánh giá (0 - 5)"
                            name="rating"
                            type="number"
                            formik={formik}
                        />

                        {/* 🌿 Checkbox nhóm */}
                        <div className="flex gap-6 mt-2">
                            <Checkbox
                                name="isNatural"
                                color="success"
                                isSelected={formik.values.isNatural}
                                onValueChange={(checked) =>
                                    formik.setFieldValue("isNatural", checked)
                                }
                            >
                                Hoa tự nhiên
                            </Checkbox>

                            <Checkbox
                                name="isSpecial"
                                color="success"
                                isSelected={formik.values.isSpecial}
                                onValueChange={(checked) =>
                                    formik.setFieldValue("isSpecial", checked)
                                }
                            >
                                Hoa đột biến
                            </Checkbox>
                        </div>

                        {/* Button tạo */}
                        <Button
                            type="submit"
                            color="success"
                            radius="full"
                            isLoading={createOrchid.isPending}
                            disabled={createOrchid.isPending}
                            className="font-semibold text-white text-base bg-green-600 hover:bg-green-700 transition-colors"
                        >
                            {createOrchid.isPending ? "Đang tạo..." : "Tạo mới"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}
