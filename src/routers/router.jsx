//src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Comparision from "../pages/Comparision";
import Home from "../pages/Home";
import News from "../pages/News";


export const router  = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "comparision",
                element: <Comparision />
            },
            {
                path: "news",
                element: <News />
            }
        ]
    }
])