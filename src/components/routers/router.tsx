import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import MainHome from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainHome,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
