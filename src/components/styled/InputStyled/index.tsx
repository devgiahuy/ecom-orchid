import { cn, Input, type InputProps } from "@heroui/react";

export function InputStyled(props: InputProps) {
  return (
    <Input variant="bordered" {...props} className={cn(props.className)} />
  );
}
