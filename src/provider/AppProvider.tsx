import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HeroUIProvider } from "@heroui/react"
import { router } from "../router"
import { AuthProvider } from "./AuthProvider"

const queryClient = new QueryClient()

export default function AppProvider() {
    return (
        <HeroUIProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </QueryClientProvider>
        </HeroUIProvider>
    )
}
