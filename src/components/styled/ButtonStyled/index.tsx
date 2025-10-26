import { Button, cn, Spinner, type ButtonProps } from "@heroui/react"

export function ButtonStyled({ className, color = "secondary", isLoading, ...rest }: ButtonProps) {
    if (isLoading) {
        return <Spinner />
    }

    return <Button color={color} {...rest} className={cn("font-medium text-base", className)} />
}
