// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom"
import DemoPage from "../components/pages/DemoPage"
import HomePage from "../components/pages/HomePage"
import DetailPage from "../components/pages/DetailPage"
import AboutPage from "../components/pages/AboutPage"
import ContactPage from "../components/pages/ContactPage"
import NaturalPage from "../components/pages/Natural"
import App from "../app/App"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/home", element: <HomePage /> },
            { path: "home/detail/:id", element: <DetailPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "natural", element: <NaturalPage /> },
            { path: "natural/detail/:id", element: <DetailPage /> },
            { path: "demo", element: <DemoPage /> }
        ]
    }
])
