import { Input, Textarea, Button, Card, CardBody } from "@heroui/react"
import { Facebook, Instagram, Youtube, Send, Mail, Phone, MapPin, Flower } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
})

const container = (stagger = 0.08) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: stagger } }
})

export function ContactPage() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container()}
            className="
        max-w-7xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
        transition-colors duration-300
      "
        >
            {/* Background texture */}
            <motion.div
                aria-hidden
                className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"
            />
            {/* Accent blob rất nhẹ */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-green-100/50 dark:bg-green-900/30 blur-3xl"
                {...(!prefersReducedMotion && {
                    animate: { opacity: [0.4, 0.55, 0.4], scale: [1, 1.06, 1] },
                    transition: { duration: 6, repeat: Infinity }
                })}
            />

            {/* Tiêu đề */}
            <div className="relative text-center mb-14">
                <motion.h2
                    variants={fadeUp(0)}
                    className="text-4xl font-extrabold text-green-600 dark:text-green-400 tracking-tight"
                >
                    Liên Hệ Với Orchid Shop
                </motion.h2>

                <motion.p
                    variants={fadeUp(0.08)}
                    className="text-lg text-gray-600 dark:text-gray-400 mt-3 flex justify-center items-center gap-2"
                >
                    Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            animate: {
                                y: [0, -6, 0],
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }
                        }}
                        initial="initial"
                        animate="animate"
                        className="inline-flex"
                    >
                        <Flower size={22} color="pink" />
                    </motion.span>
                </motion.p>
            </div>

            {/* Nội dung chính */}
            <motion.div
                variants={container(0.06)}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
            >
                {/* Form liên hệ */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.98 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.45, ease: "easeOut" }
                        }
                    }}
                >
                    <Card
                        shadow="sm"
                        radius="lg"
                        className="border border-green-100 dark:border-gray-800 bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm"
                    >
                        <CardBody className="p-8 space-y-5">
                            <motion.form
                                variants={container(0.05)}
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    alert("Gửi liên hệ thành công 🌿")
                                }}
                                className="flex flex-col gap-5"
                            >
                                <motion.div variants={fadeUp(0)}>
                                    <Input
                                        label="Họ và tên"
                                        placeholder="Nhập họ tên của bạn"
                                        radius="full"
                                        variant="bordered"
                                        color="success"
                                        required
                                    />
                                </motion.div>

                                <motion.div variants={fadeUp(0.02)}>
                                    <Input
                                        type="email"
                                        label="Email"
                                        placeholder="name@gmail.com"
                                        radius="full"
                                        variant="bordered"
                                        color="success"
                                        required
                                    />
                                </motion.div>

                                <motion.div variants={fadeUp(0.04)}>
                                    <Textarea
                                        label="Nội dung liên hệ"
                                        placeholder="Hãy để lại lời nhắn cho chúng tôi..."
                                        minRows={4}
                                        radius="lg"
                                        variant="bordered"
                                        color="success"
                                    />
                                </motion.div>

                                <motion.div variants={fadeUp(0.06)}>
                                    <Button
                                        type="submit"
                                        color="success"
                                        radius="full"
                                        className="mt-2 font-semibold text-white text-base bg-green-600 hover:bg-green-700"
                                        startContent={<Send size={18} />}
                                    >
                                        Gửi Liên Hệ
                                    </Button>
                                </motion.div>
                            </motion.form>
                        </CardBody>
                    </Card>
                </motion.div>

                {/* Thông tin liên hệ */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.98 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.45, ease: "easeOut" }
                        }
                    }}
                >
                    <Card
                        shadow="sm"
                        radius="lg"
                        className="border border-green-100 dark:border-gray-800 bg-green-50/60 dark:bg-gray-800/70 backdrop-blur-sm"
                    >
                        <CardBody className="p-8 flex flex-col justify-center space-y-4">
                            <motion.h5
                                variants={fadeUp(0)}
                                className="text-green-600 dark:text-green-400 font-bold text-xl mb-3 flex items-center gap-2"
                            >
                                🌿 Thông Tin Liên Hệ
                            </motion.h5>

                            <motion.div variants={container(0.04)} className="space-y-3">
                                <motion.div variants={fadeUp(0.02)}>
                                    <ContactItem
                                        icon={<MapPin className="text-green-500" size={20} />}
                                        text="123 FPT, TP. Hồ Chí Minh"
                                    />
                                </motion.div>
                                <motion.div variants={fadeUp(0.04)}>
                                    <ContactItem
                                        icon={<Phone className="text-green-500" size={20} />}
                                        text="(+84) 123 456 789"
                                    />
                                </motion.div>
                                <motion.div variants={fadeUp(0.06)}>
                                    <ContactItem
                                        icon={<Mail className="text-green-500" size={20} />}
                                        text="orchid.support@gmail.com"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Mạng xã hội */}
                            <motion.div variants={fadeUp(0.08)} className="flex gap-6 mt-6">
                                <SocialIcon
                                    href="#"
                                    title="Facebook"
                                    icon={<Facebook size={22} />}
                                />
                                <SocialIcon
                                    href="#"
                                    title="Instagram"
                                    icon={<Instagram size={22} />}
                                />
                                <SocialIcon href="#" title="YouTube" icon={<Youtube size={22} />} />
                            </motion.div>
                        </CardBody>
                    </Card>
                </motion.div>
            </motion.div>
        </motion.section>
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
        <motion.a
            href={href}
            title={title}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
        >
            {icon}
        </motion.a>
    )
}
