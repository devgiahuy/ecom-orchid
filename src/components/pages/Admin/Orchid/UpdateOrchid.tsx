import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate, useParams } from "react-router-dom"
import { useGetOrchidById, useUpdateOrchid } from "@/hooks/queries/useOrchid"
import { Checkbox, Card, CardBody, AutocompleteItem, Spinner } from "@heroui/react"
import {
    Flower2,
    Palette,
    Sprout,
    Image as ImageIcon,
    Star,
    Heart,
    Video,
    DollarSign,
    TagIcon
} from "lucide-react"
import { FormField } from "@/components/models"
import { useState } from "react"
import { useGetAllCategories } from "@/hooks/queries/useCategory"
import { AutocompleteStyled, ButtonStyled } from "@/components/styled"
import { useUploadImage } from "@/hooks/queries/useCloudinary"

export function UpdateOrchid() {
    const { id } = useParams()
    const navigation = useNavigate()
    const { data: orchid } = useGetOrchidById(id!)
    const updateOrchid = useUpdateOrchid()
    const uploadImage = useUploadImage()

    const [hovered, setHovered] = useState<number>(0)
    const { data: categories } = useGetAllCategories()
    const [selectCategory, setSelectCategory] = useState(orchid?.category || "")

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: orchid?.name ?? "",
            rating: orchid?.rating ?? 0,
            isNatural: orchid?.isNatural ?? false,
            isSpecial: orchid?.isSpecial ?? false,
            imageUrl: orchid?.imageUrl ?? "",
            color: orchid?.color ?? "",
            numberOfLike: orchid?.numberOfLike ?? 0,
            origin: orchid?.origin ?? "",
            category: selectCategory ?? "",
            price: orchid?.price ?? 0,
            linkVideo: orchid?.linkVideo ?? "",
            public_id: orchid?.public_id ?? ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên hoa lan là bắt buộc"),
            imageUrl: Yup.string().url("Phải là một URL hợp lệ").required("Hình ảnh là bắt buộc"),
            price: Yup.number().positive("Giá phải là số dương").required("Giá là bắt buộc"),
            origin: Yup.string().required("Nguồn gốc là bắt buộc"),
            color: Yup.string().required("Màu sắc là bắt buộc"),
            category: Yup.string().required("Phân loại là bắt buộc"),
            rating: Yup.number().min(0).max(5).required("Đánh giá là bắt buộc")
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
            {/* Background texture */}
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
                        {/* <FormField
                            icon={<ImageIcon />}
                            label="URL Hình ảnh"
                            name="image"
                            formik={formik}
                        /> */}
                        <FormField
                            icon={<DollarSign />}
                            label="Giá (VNĐ)"
                            name="price"
                            type="number"
                            formik={formik}
                        />

                        <AutocompleteStyled
                            label={"Phân loại"}
                            items={categories ?? []}
                            name="category"
                            startContent={<TagIcon className="text-xl" />}
                            selectedKey={selectCategory}
                            onSelectionChange={(key) => {
                                const value = key as string
                                setSelectCategory(value)
                                formik.setFieldValue("category", value)
                            }}
                            className="max-w-60 h-20 mr-0"
                        >
                            {(categories ?? []).map((item) => (
                                <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
                            ))}
                        </AutocompleteStyled>
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
                        {/* <FormField
                            icon={<Star />}
                            label="Đánh giá (0 - 5)"
                            name="rating"
                            type="number"
                            formik={formik}
                        /> */}
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
                                                isActive
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
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

                        {/* Checkbox nhóm */}
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

                        {/* Upload ảnh bằng Cloudinary */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700 flex items-center gap-2">
                                <ImageIcon size={18} />
                                Hình ảnh hoa lan
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (!file) return

                                    uploadImage.mutate(file, {
                                        onSuccess: (data) => {
                                            formik.setFieldValue("imageUrl", data.secure_url)
                                            formik.setFieldValue("public_id", data.public_id)
                                        }
                                    })
                                }}
                                className="file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-green-50 file:text-green-700
                   hover:file:bg-green-100"
                            />

                            {/* Loading + error */}
                            {uploadImage.isPending && (
                                <div>
                                    <Spinner />
                                </div>
                            )}

                            {formik.values.imageUrl && (
                                <img
                                    src={formik.values.imageUrl}
                                    alt="Preview"
                                    className="mt-2 w-32 h-32 object-cover rounded-xl border border-green-100"
                                />
                            )}

                            {formik.touched.imageUrl && formik.errors.imageUrl && (
                                <p className="text-red-500 text-sm">{formik.errors.imageUrl}</p>
                            )}
                        </div>

                        {/* Nút cập nhật */}
                        <ButtonStyled
                            type="submit"
                            color="success"
                            radius="full"
                            isLoading={updateOrchid.isPending}
                            disabled={updateOrchid.isPending || uploadImage.isPending}
                            className="font-semibold text-white text-base bg-green-600 hover:bg-green-700 transition-colors"
                            onPress={() => navigation("/admin/orchids")}
                        >
                            {updateOrchid.isPending ? <Spinner /> : "Cập nhật"}
                        </ButtonStyled>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}
