import App from "../app/App"
import CreateOrchid from "@/components/pages/User/CreateOrchid"
import { Dashboard } from "@/components/pages/Admin/Dashboard"
import { UpdatePage } from "@/components/pages/Admin/UpdatePage"
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
import { createHashRouter, type RouteObject } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRote"

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//             { index: true, element: <HomePage /> },
//             { path: "home", element: <HomePage /> },
//             { path: "about", element: <AboutPage /> },
//             { path: "contact", element: <ContactPage /> },
//             { path: "demo", element: <DemoPage /> },
//             { path: "login", element: <LoginPage /> },
//             { path: "error", element: <ErrorPage /> },

//             {
//                 element: <ProtectedRoute allowRoles={["user", "admin"]} />,
//                 children: [
//                     { path: "detail/:id", element: <DetailPage /> },
//                     { path: "natural", element: <NaturalPage /> },
//                     { path: "natural/detail/:id", element: <DetailPage /> }
//                 ],
//                 errorElement: <ErrorPage />
//             },

//             {
//                 element: <ProtectedRoute key="admin" allowRoles={["admin"]} />,
//                 children: [
//                     { path: "dashboard", element: <Dashboard /> },
//                     { path: "dashboard/:id", element: <UpdatePage /> },
//                     { path: "dashboard/create", element: <CreateOrchid /> }
//                 ]
//             }
//         ]
//     }
// ])

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            // --- Public routes ---
            { index: true, element: <HomePage /> },
            { path: "home", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "demo", element: <DemoPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "error", element: <ErrorPage /> },

            // --- User routes ---
            {
                element: <ProtectedRoute allowRoles={["user", "admin"]} />,
                children: [
                    { path: "detail/:id", element: <DetailPage /> },
                    { path: "natural", element: <NaturalPage /> },
                    { path: "natural/detail/:id", element: <DetailPage /> }
                ],
                errorElement: <ErrorPage />
            },

            // --- Admin routes ---
            {
                element: <ProtectedRoute key="admin" allowRoles={["admin"]} />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "dashboard/:id", element: <UpdatePage /> },
                    { path: "dashboard/create", element: <CreateOrchid /> }
                ],
                errorElement: <ErrorPage />
            }
        ]
    }
]

// ✅ HashRouter để deploy GitHub Pages
export const router = createHashRouter(routes)
