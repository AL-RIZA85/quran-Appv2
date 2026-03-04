import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SurahList from "../pages/SurahList";
import Surat from "../pages/Surat";
import Template from "../Template";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [{

            path: "/",
            element: <App />
        },
        {
            path: "/SurahList",
            element: <SurahList />,
        },
        {
            
            path: "/surat/:suratId",
            element: <Surat />,
        
        },
]
    }
])