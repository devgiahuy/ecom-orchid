import { ButtonStyled } from "@/components/styled"
import { TableStyled } from "@/components/styled/TableStyled"
import { useDeleteCategory, useSortedCategories } from "@/hooks/queries/useCategory"
import { Spinner, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"
import { useCallback } from "react"

import { useNavigate } from "react-router-dom"

export function TableCategory() {
    const navigate = useNavigate()
    const { data: categories, isLoading } = useSortedCategories()
    console.log("categories unsorted", categories)

    // console.log(sorted!.map((c) => `${c.name} — ${c.createdAt}`))

    const deleted = useDeleteCategory()

    const handleDelete = useCallback(
        async (id: string) => {
            deleted.mutateAsync(id)
        },
        [deleted]
    )
    console.log("categories", categories)

    if (isLoading)
        return (
            <div className="flex justify-center items-center">
                <Spinner />
            </div>
        )
    return (
        <div
            className="
    overflow-x-auto rounded-3xl border border-green-100 dark:border-gray-800 
    bg-white dark:bg-gray-900 shadow-lg relative overflow-hidden m-10
  "
        >
            <div
                className="
      relative flex flex-col md:flex-row items-start md:items-center 
      justify-between px-6 py-6 border-b border-green-50 dark:border-gray-800 
      bg-green-50/60 dark:bg-gray-800/50 z-10
    "
            >
                <div>
                    <h2 className="text-2xl font-extrabold text-green-700 dark:text-green-400">
                        Danh Sách Loại Hoa Lan
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Quản lý, chỉnh sửa hoặc xóa các sản phẩm có trong cửa hàng
                    </p>
                </div>

                <ButtonStyled
                    color="success"
                    className="
        mt-4 md:mt-0 text-white bg-green-600 hover:bg-green-700
        px-5 py-2 font-semibold rounded-full shadow-sm transition-all
      "
                    onPress={() => navigate("/admin/category/create")}
                >
                    + Thêm Loại Hoa
                </ButtonStyled>
            </div>

            {/*table */}
            <TableStyled className="min-w-full text-sm md:text-base relative z-10" removeWrapper>
                <TableHeader>
                    <TableColumn className="text-center text-gray-800 dark:text-gray-200 font-semibold py-4 bg-green-50/70 dark:bg-gray-800/70">
                        No.
                    </TableColumn>
                    <TableColumn className="text-center text-gray-800 dark:text-gray-200 font-semibold py-4 bg-green-50/70 dark:bg-gray-800/70">
                        Name
                    </TableColumn>

                    <TableColumn className="text-center text-gray-800 dark:text-gray-200 font-semibold py-4 bg-green-50/70 dark:bg-gray-800/70">
                        Description
                    </TableColumn>
                    <TableColumn className="text-center text-gray-800 dark:text-gray-200 font-semibold py-4 bg-green-50/70 dark:bg-gray-800/70">
                        Action
                    </TableColumn>
                </TableHeader>

                <TableBody>
                    {categories!.map((item, index) => (
                        <TableRow
                            key={item.id}
                            className="
            hover:bg-green-50/60 dark:hover:bg-gray-800/60
            transition-colors border-b border-green-50 dark:border-gray-700 cursor-pointer
          "
                        >
                            <TableCell className="text-center text-gray-700 dark:text-gray-300 py-4">
                                {index + 1}
                            </TableCell>

                            <TableCell
                                className="text-center font-semibold text-green-700 dark:text-green-400"
                                onClick={() => navigate(`/orchids/${item.id}`)}
                            >
                                {item.name}
                            </TableCell>

                            <TableCell className="text-center text-gray-600 dark:text-gray-300">
                                {item.description}
                            </TableCell>

                            {/*  Action Buttons */}
                            <TableCell className="text-center py-3">
                                <div className="flex items-center justify-center gap-3">
                                    <ButtonStyled
                                        color="danger"
                                        variant="bordered"
                                        className="
                  h-8 w-24 border border-red-500 text-red-600
                  hover:bg-red-500 hover:text-white transition-colors font-medium rounded-full
                "
                                        onPress={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </ButtonStyled>

                                    <ButtonStyled
                                        color="success"
                                        variant="bordered"
                                        className="
                  h-8 w-24 border border-green-500 text-green-600
                  hover:bg-green-600 hover:text-white transition-colors font-medium rounded-full
                "
                                        onPress={() => navigate(`/admin/category/${item.id}`)}
                                    >
                                        Update
                                    </ButtonStyled>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableStyled>
        </div>
    )
}
