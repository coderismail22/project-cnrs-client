import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo/WhatWeDo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />,
      },
    ],
  },
]);
