import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { router } from "../router"

import { AuthProvider } from "./AuthProvider"
import { HeroUIProvider, ToastProvider } from "@heroui/react"

const queryClient = new QueryClient()

export default function AppProvider() {
    return (
        <HeroUIProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <RouterProvider router={router} />
                    <ToastProvider />
                </AuthProvider>
            </QueryClientProvider>
        </HeroUIProvider>
    )
}
