import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HeroUIProvider } from "@heroui/react"
import { router } from "../router"

const queryClient = new QueryClient()

export default function AppProvider() {
    return (
        <HeroUIProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                {/* <BrowserRouter>{children}</BrowserRouter> */}
            </QueryClientProvider>
        </HeroUIProvider>
    )
}
