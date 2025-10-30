import App from "../app/App"
import {
    AboutPage,
    ContactPage,
    DemoPage,
    ErrorPage,
    HomePage,
    LoginPage
} from "@/components/pages"
import DetailPage from "@/components/pages/User/DetailPage"
import NaturalPage from "@/components/pages/Gest/NaturalPage"
import { createBrowserRouter } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRote"
import CreateOrchid from "@/components/pages/Admin/Orchid/CreateOrchid"
import CartPage from "@/components/pages/User/CartPage"
import { AdminLayout } from "@/app/AdminLayout"
import { Orchids } from "@/components/pages/Admin/Orchid/TableOrchids"
import { CreateCategory, TableCategory } from "@/components/pages/Admin/Category"
import UpdateCategory from "@/components/pages/Admin/Category/UpdateCategory"
import TableCart from "@/components/pages/Admin/Cart/TableCart"
import { UpdateOrchid } from "@/components/pages/Admin/Orchid/UpdateOrchid"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "home", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "demo", element: <DemoPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "error", element: <ErrorPage /> },

            {
                element: <ProtectedRoute allowRoles={["user", "admin"]} />,
                children: [
                    { path: "detail/:id", element: <DetailPage /> },
                    { path: "natural", element: <NaturalPage /> },
                    { path: "natural/detail/:id", element: <DetailPage /> },
                    { path: "cart", element: <CartPage /> }
                ]
            },

            {
                path: "admin",
                element: (
                    <ProtectedRoute key="admin" allowRoles={["admin"]}>
                        <AdminLayout />
                    </ProtectedRoute>
                ),
                children: [
                    { path: "orchids", element: <Orchids /> },
                    { path: "orchids/:id", element: <UpdateOrchid /> },
                    { path: "orchids/create", element: <CreateOrchid /> },
                    { path: "categories", element: <TableCategory /> },
                    { path: "category/:id", element: <UpdateCategory /> },
                    { path: "category/create", element: <CreateCategory /> },
                    { path: "cart", element: <TableCart /> }
                ]
            }
        ]
    }
])
