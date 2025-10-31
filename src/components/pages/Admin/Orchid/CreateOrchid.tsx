import { useFormik } from "formik"
import * as Yup from "yup"
import { useCreateOrchid } from "../../../../hooks/queries/useOrchid"
import { AutocompleteItem, Card, CardBody, Checkbox } from "@heroui/react"
import {
    Flower2,
    Image as ImageIcon,
    Palette,
    Sprout,
    DollarSign,
    Star,
    Video,
    TagIcon
} from "lucide-react"
import { FormField } from "@/components/models"
import { useGetAllCategories } from "@/hooks/queries/useCategory"
import { AutocompleteStyled, ButtonStyled } from "@/components"
import { useState } from "react"

export default function CreateOrchid() {
    const createOrchid = useCreateOrchid()
    const [hovered, setHovered] = useState<number>(0)
    const { data: categories } = useGetAllCategories()
    const [selectCategory, setSelectCategory] = useState("")

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            price: 0,
            isNatural: false,
            isSpecial: false,
            origin: "",
            color: "",
            category: selectCategory,
            rating: 0,
            createdAt: new Date().toISOString()
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên hoa lan là bắt buộc"),
            image: Yup.string().url("Phải là URL hợp lệ").required("Hình ảnh là bắt buộc"),
            price: Yup.number().positive("Giá phải là số dương").required("Giá là bắt buộc").min(0),
            origin: Yup.string().required("Nguồn gốc là bắt buộc"),
            color: Yup.string().required("Màu sắc là bắt buộc"),
            // category: Yup.string().required("Phân loại là bắt buộc"),
            rating: Yup.number().min(0).max(5).required("Đánh giá là bắt buộc")
        }),
        onSubmit: (values) => {
            console.log(values)
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
            {/* Background pattern */}
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

                        <AutocompleteStyled
                            label={"Phân loại"}
                            items={categories ?? []}
                            name="category"
                            startContent={<TagIcon className="text-xl" />}
                            selectedKey={selectCategory}
                            onSelectionChange={(key) => {
                                const value = key as string
                                setSelectCategory(value)
                                formik.setFieldValue("category", value) // ✅ cập nhật Formik
                            }}
                            className="max-w-60 h-20 mr-0"
                        >
                            {(categories ?? []).map((item) => (
                                <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
                            ))}
                        </AutocompleteStyled>

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
                        {/* <FormField
                            icon={<Star size={18} />}
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
                            icon={<Video />}
                            label="Link video"
                            name="linkVideo"
                            formik={formik}
                        />

                        {/* Checkbox nhóm */}
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

                        {/* Button */}
                        <ButtonStyled
                            type="submit"
                            color="success"
                            radius="full"
                            isLoading={createOrchid.isPending}
                            disabled={createOrchid.isPending}
                            className="font-semibold text-white text-base bg-green-600 hover:bg-green-700 transition-colors"
                        >
                            {createOrchid.isPending ? "Đang tạo..." : "Tạo mới"}
                        </ButtonStyled>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}
