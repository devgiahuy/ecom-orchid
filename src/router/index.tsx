import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage.tsx";
import DetailPage from "../components/pages/DetailPage.tsx";
import AboutPage from "../components/pages/AboutPage.tsx";
import ContactPage from "../components/pages/ContactPage.tsx";
import NaturalPage from "../components/pages/Natural.tsx";
import DemoPage from "../components/pages/DemoPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "home/detail/:id", element: <DetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "natural", element: <NaturalPage /> },
      { path: "natural/detail/:id", element: <DetailPage /> },
      { path: "/demo", element: <DemoPage /> },
    ],
  },
]);
