import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.tsx";
import HomePage from "../components/pages/HomePage.tsx";
import DetailPage from "../components/pages/DetailPage.tsx";
import AboutPage from "../components/pages/AboutPage.tsx";
import ContactPage from "../components/pages/ContactPage.tsx";
import NaturalPage from "../components/pages/Natural.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "home/detail/:id", element: <DetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "natural", element: <NaturalPage /> },
      { path: "natural/detail/:id", element: <DetailPage /> },
    ],
  },
]);
