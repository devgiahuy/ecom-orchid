export function DetailItem({
    icon,
    label,
    value
}: {
    icon: React.ReactNode
    label: string
    value: string | number
}) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-green-500">{icon}</span>
            <b>{label}:</b>
            <span className="ml-1 text-gray-800 dark:text-gray-200">{value}</span>
        </div>
    )
}
