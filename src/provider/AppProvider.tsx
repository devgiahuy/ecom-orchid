import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { router } from "../router"
import { AuthProvider } from "./AuthProvider"

const queryClient = new QueryClient()

export default function AppProvider() {
    return (
        <HeroUIProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <RouterProvider router={router} />
                    <ToastProvider
                        toastProps={{
                            radius: "full",
                            color: "primary",
                            variant: "flat",
                            timeout: 1000,
                            hideIcon: true,
                            classNames: {
                                closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2"
                            }
                        }}
                    />
                </AuthProvider>
            </QueryClientProvider>
        </HeroUIProvider>
    )
}
