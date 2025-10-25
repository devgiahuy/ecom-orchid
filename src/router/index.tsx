// import { createBrowserRouter } from "react-router-dom"
// import DemoPage from "../components/pages/DemoPage"
// import HomePage from "../components/pages/HomePage"
// import DetailPage from "../components/pages/DetailPage"
// import AboutPage from "../components/pages/AboutPage"
// import ContactPage from "../components/pages/ContactPage"
// import NaturalPage from "../components/pages/NaturalPage"
// import App from "../app/App"
// import { ProtectedRoute } from "./ProtectedRoter"

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             { index: true, element: <HomePage /> },
//             { path: "/home", element: <HomePage /> },
//             { path: "home/detail/:id", element: <DetailPage /> },
//             { path: "about", element: <AboutPage /> },
//             { path: "contact", element: <ContactPage /> },
//             { path: "natural", element: <NaturalPage /> },
//             { path: "natural/detail/:id", element: <DetailPage /> },
//             { path: "demo", element: <DemoPage /> }
//         ]
//     }
// ])

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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Public routes (guest cũng xem được)
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "demo", element: <DemoPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "unauthorized", element: <ErrorPage /> },

            // User routes (chỉ user hoặc admin)
            {
                element: <ProtectedRoute allowRoles={["user", "admin"]} />,
                children: [
                    { path: "home", element: <HomePage /> },
                    { path: "home/detail/:id", element: <DetailPage /> },
                    { path: "natural", element: <NaturalPage /> },
                    { path: "natural/detail/:id", element: <DetailPage /> }
                ]
            },

            // Admin-only routes
            {
                path: "admin",
                element: <ProtectedRoute allowRoles={["admin"]} />,
                children: [{ index: true, element: <DemoPage /> }]
            }
        ]
    }
])
