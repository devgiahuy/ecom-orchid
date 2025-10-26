import { Input } from "@heroui/react"
import { ButtonStyled } from "../styled"
import CreateOrchid from "./User/CreateOrchid"

export default function DemoPage() {
    return (
        <>
            <h1>Demo Page</h1>
            {/* <CreateOrchid /> */}
            <ButtonStyled color="primary">AAAA</ButtonStyled>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input label="Email" type="email" />
                <Input label="Email" placeholder="Enter your email" type="email" />
            </div>
        </>
    )
}
