import { DropdownStyled } from "@/components/styled"
import { useAuth } from "@/provider/AuthProvider"
import { DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react"
import { getAuth } from "firebase/auth"
import { Link } from "react-router-dom"

export default function ProfileDropdown() {
    const { logout, role } = useAuth()
    const user = getAuth().currentUser

    return (
        <div className="flex items-center gap-4">
            <DropdownStyled placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    {/* information */}
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">{user?.displayName}</p>
                        <p className="font-semibold">Vai trò: {role}</p>
                    </DropdownItem>

                    {/* actions  */}
                    <DropdownItem key="profile">
                        <Link to="/login">Profile</Link>
                    </DropdownItem>
                    <DropdownItem key="dashboard">
                        <Link to="/dashboard">Dasshboard</Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onPress={logout}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </DropdownStyled>
        </div>
    )
}
