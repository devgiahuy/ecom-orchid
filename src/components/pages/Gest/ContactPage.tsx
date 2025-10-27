import { Input, Textarea, Button, Card, CardBody } from "@heroui/react"
import { Facebook, Instagram, Youtube, Send, Mail, Phone, MapPin, Flower } from "lucide-react"

export function ContactPage() {
    return (
        <section
            className="
        max-w-7xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
        transition-colors duration-300
      "
        >
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

            {/* Tiêu đề */}
            <div className="relative text-center mb-14">
                <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 tracking-tight">
                    Liên Hệ Với Orchid Shop
                </h2>
                <p className=" flex justify-center text-lg text-gray-600 dark:text-gray-400 mt-3">
                    Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất{" "}
                    <Flower color="pink" size={22} />
                </p>
            </div>

            {/* 🪴 Nội dung chính */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* 🌿 Form liên hệ */}
                <Card
                    shadow="sm"
                    radius="lg"
                    className="border border-green-100 dark:border-gray-800 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm"
                >
                    <CardBody className="p-8 space-y-5">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                alert("Gửi liên hệ thành công 🌿")
                            }}
                            className="flex flex-col gap-5"
                        >
                            <Input
                                label="Họ và tên"
                                placeholder="Nhập họ tên của bạn"
                                radius="full"
                                variant="bordered"
                                color="success"
                                required
                            />
                            <Input
                                type="email"
                                label="Email"
                                placeholder="name@gmail.com"
                                radius="full"
                                variant="bordered"
                                color="success"
                                required
                            />
                            <Textarea
                                label="Nội dung liên hệ"
                                placeholder="Hãy để lại lời nhắn cho chúng tôi..."
                                minRows={4}
                                radius="lg"
                                variant="bordered"
                                color="success"
                            />
                            <Button
                                type="submit"
                                color="success"
                                radius="full"
                                className="mt-2 font-semibold text-white text-base bg-green-600 hover:bg-green-700"
                                startContent={<Send size={18} />}
                            >
                                Gửi Liên Hệ
                            </Button>
                        </form>
                    </CardBody>
                </Card>

                {/* 🌼 Thông tin liên hệ */}
                <Card
                    shadow="sm"
                    radius="lg"
                    className="border border-green-100 dark:border-gray-800 bg-green-50/60 dark:bg-gray-800/70 backdrop-blur-sm"
                >
                    <CardBody className="p-8 flex flex-col justify-center space-y-4">
                        <h5 className="text-green-600 dark:text-green-400 font-bold text-xl mb-3 flex items-center gap-2">
                            🌿 Thông Tin Liên Hệ
                        </h5>

                        <ContactItem
                            icon={<MapPin className="text-green-500" size={20} />}
                            text="123 FPT, TP. Hồ Chí Minh"
                        />
                        <ContactItem
                            icon={<Phone className="text-green-500" size={20} />}
                            text="(+84) 123 456 789"
                        />
                        <ContactItem
                            icon={<Mail className="text-green-500" size={20} />}
                            text="orchid.support@gmail.com"
                        />

                        {/* Mạng xã hội */}
                        <div className="flex gap-6 mt-6">
                            <SocialIcon href="#" title="Facebook" icon={<Facebook size={22} />} />
                            <SocialIcon href="#" title="Instagram" icon={<Instagram size={22} />} />
                            <SocialIcon href="#" title="YouTube" icon={<Youtube size={22} />} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
            {icon}
            {text}
        </p>
    )
}

function SocialIcon({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            title={title}
            className="
        text-green-600 dark:text-green-400 hover:scale-110 
        hover:text-green-700 dark:hover:text-green-300 
        transition-transform duration-200
      "
        >
            {icon}
        </a>
    )
}
