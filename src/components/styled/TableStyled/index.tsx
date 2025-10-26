import { Table, cn, type TableProps } from "@heroui/react"

export function TableStyled(props: TableProps) {
    return <Table isHeaderSticky {...props} className={cn("w-full", props.className)} />
}
