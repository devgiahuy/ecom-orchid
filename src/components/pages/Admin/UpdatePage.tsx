import { useFormik } from "formik"
import * as Yup from "yup"
import { useParams } from "react-router-dom"
import { useGetOrchidById, useUpdateOrchid } from "@/hooks/queries/useOrchid"
import { Input, Checkbox, Button, Card, CardBody } from "@heroui/react"
import {
    Flower2,
    Palette,
    Tag,
    Sprout,
    Image as ImageIcon,
    Star,
    Heart,
    Video,
    DollarSign
} from "lucide-react"
import { FormField } from "@/components/models"

export function UpdatePage() {
    const { id } = useParams()
    const { data: orchid } = useGetOrchidById(id!)
    const updateOrchid = useUpdateOrchid()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: orchid?.name ?? "",
            rating: orchid?.rating ?? 0,
            isNatural: orchid?.isNatural ?? false,
            isSpecial: orchid?.isSpecial ?? false,
            image: orchid?.image ?? "",
            color: orchid?.color ?? "",
            numberOfLike: orchid?.numberOfLike ?? 0,
            origin: orchid?.origin ?? "",
            category: orchid?.category ?? "",
            price: orchid?.price ?? 0,
            linkVideo: orchid?.linkVideo ?? ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên hoa lan là bắt buộc"),
            image: Yup.string().url("Phải là một URL hợp lệ").required("Hình ảnh là bắt buộc"),
            price: Yup.number().positive("Giá phải là số dương").required("Giá là bắt buộc"),
            origin: Yup.string().required("Nguồn gốc là bắt buộc"),
            color: Yup.string().required("Màu sắc là bắt buộc"),
            category: Yup.string().required("Phân loại là bắt buộc")
        }),
        onSubmit: (values) => {
            updateOrchid.mutateAsync({ id: id!, req: values })
        }
    })

    return (
        <section
            className="
        max-w-3xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
      "
        >
            {/* Background texture nhẹ */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

            <div className="relative text-center mb-12">
                <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                    Cập Nhật Hoa Lan
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Sửa đổi thông tin chi tiết của sản phẩm hiện có
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
                            icon={<Flower2 />}
                            label="Tên hoa lan"
                            name="name"
                            formik={formik}
                        />
                        <FormField
                            icon={<ImageIcon />}
                            label="URL Hình ảnh"
                            name="image"
                            formik={formik}
                        />
                        <FormField
                            icon={<DollarSign />}
                            label="Giá (VNĐ)"
                            name="price"
                            type="number"
                            formik={formik}
                        />
                        <FormField
                            icon={<Tag />}
                            label="Phân loại"
                            name="category"
                            formik={formik}
                        />
                        <FormField
                            icon={<Palette />}
                            label="Màu sắc"
                            name="color"
                            formik={formik}
                        />
                        <FormField
                            icon={<Sprout />}
                            label="Nguồn gốc"
                            name="origin"
                            formik={formik}
                        />
                        <FormField
                            icon={<Star />}
                            label="Đánh giá (0 - 5)"
                            name="rating"
                            type="number"
                            formik={formik}
                        />
                        <FormField
                            icon={<Heart />}
                            label="Lượt thích"
                            name="numberOfLike"
                            type="number"
                            formik={formik}
                        />
                        <FormField
                            icon={<Video />}
                            label="Link video"
                            name="linkVideo"
                            formik={formik}
                        />

                        {/* 🌱 Checkbox nhóm */}
                        <div className="flex flex-wrap gap-6 mt-2">
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

                        {/* 🌸 Nút cập nhật */}
                        <Button
                            type="submit"
                            color="success"
                            radius="full"
                            isLoading={updateOrchid.isPending}
                            disabled={updateOrchid.isPending}
                            className="font-semibold text-white text-base bg-green-600 hover:bg-green-700 transition-colors"
                        >
                            {updateOrchid.isPending ? "Đang cập nhật..." : "Cập nhật"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}
