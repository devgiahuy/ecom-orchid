import { Card, CardBody, Avatar } from "@heroui/react"
import { Mail, UserCircle2, Shield, LogOut } from "lucide-react"
import { useAuth } from "@/provider/AuthProvider"
import { ButtonStyled } from "@/components/styled"
import { useNavigate } from "react-router-dom"

export function UserProfile() {
    const { role, userData, logout } = useAuth()
    const navigate = useNavigate()

    return (
        <section
            className="
        max-w-lg mx-auto mt-10 p-6 rounded-3xl
        bg-white/90 dark:bg-gray-900/80
        border border-green-100 dark:border-gray-800
        shadow-md backdrop-blur-sm transition-all duration-300
      "
        >
            <div className="flex flex-col items-center text-center space-y-4">
                {/*  Avatar */}
                <Avatar
                    src={
                        userData?.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    // alt={user?.displayName}
                    size="lg"
                    className="w-24 h-24 border-2 border-green-400 shadow-sm"
                />

                {/* 🌿 Thông tin cơ bản */}
                <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                    {userData?.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{userData?.email}</p>

                {/* Thông tin chi tiết */}
                <Card
                    shadow="none"
                    radius="lg"
                    className="w-full mt-4 border border-green-100 dark:border-gray-800 bg-green-50/50 dark:bg-gray-800/40"
                >
                    <CardBody className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                        <ProfileRow
                            icon={<UserCircle2 size={18} />}
                            label="Tên người dùng"
                            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                            value={userData?.name!}
                        />
                        <ProfileRow
                            icon={<Mail size={18} />}
                            label="Email"
                            value={userData!.email}
                        />
                        <ProfileRow icon={<Shield size={18} />} label="Vai trò" value={role} />
                        {/* <ProfileRow
                            icon={<Calendar size={18} />}
                            label="Ngày tạo"
                            value={new Date(userData?.createdAt).toLocaleDateString("vi-VN")}
                        /> */}
                        <ButtonStyled
                            // onPress={logout}
                            color="danger"
                            radius="full"
                            startContent={<LogOut size={18} />}
                            className="mt-4 font-semibold"
                            onPress={() => {
                                logout()
                                navigate("/")
                            }}
                        >
                            Đăng xuất
                        </ButtonStyled>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

function ProfileRow({
    icon,
    label,
    value
}: {
    icon: React.ReactNode
    label: string
    value: string
}) {
    return (
        <div className="flex items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-700 pb-2 last:border-none">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                {icon}
                <span>{label}</span>
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-100">{value}</span>
        </div>
    )
}
