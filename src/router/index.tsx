import { createBrowserRouter } from "react-router-dom"
import App from "../app/App"
import HomePage from "../components/pages/HomePage"
import AboutPage from "../components/pages/AboutPage"
import ContactPage from "../components/pages/ContactPage"
import DemoPage from "../components/pages/DemoPage"
import LoginPage from "../components/pages/LoginPage"
import { ProtectedRoute } from "./ProtectedRoter"
import DetailPage from "../components/pages/DetailPage"
import NaturalPage from "../components/pages/NaturalPage"
import ErrorPage from "../components/pages/ErrorPage"
import CreateOrchid from "@/components/pages/User/CreateOrchid"
import { Dashboard } from "@/components/pages/Admin/Dashboard"
import { UpdatePage } from "@/components/pages/Admin/UpdatePage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "home", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "demo", element: <DemoPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "unauthorized", element: <ErrorPage /> },

            {
                element: <ProtectedRoute allowRoles={["user", "admin"]} />,
                children: [
                    // { path: "home", element: <HomePage /> },
                    { path: "detail/:id", element: <DetailPage /> },
                    { path: "natural", element: <NaturalPage /> },
                    { path: "natural/detail/:id", element: <DetailPage /> },
                    { path: "dashboard/create", element: <CreateOrchid /> },
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "dashboard/:id", element: <UpdatePage /> }
                ]
            },

            {
                path: "admin",
                element: <ProtectedRoute allowRoles={["admin"]} />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "dashboard/:id", element: <UpdatePage /> }
                ]
            }
        ]
    }
])
