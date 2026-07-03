import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MiscPage from "./pages/MiscPage";

const basename =
  import.meta.env.MODE === "production" ? "/christophersnay-com" : "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "misc", element: <MiscPage /> },
      ],
    },
  ],
  { basename },
);
