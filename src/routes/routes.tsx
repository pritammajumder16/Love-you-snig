import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
import { HomePage } from "../pages/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);
