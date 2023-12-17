import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/Home.tsx";
import {Page1} from "../pages/Page1.tsx";
import {About} from "../pages/About.tsx";
import {Email} from "../pages/Email.tsx";
import {Page2} from "../pages/Page2.tsx";
import {DefaultLayout} from "../layout/defaultLayout.tsx";


export const router = createBrowserRouter([

    {   element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/1",
                element:<Page1/>,
            },
            {
                path:'/2',
                element:<Page2/>
            }
        ]
    },
    {
        path:"/1/about",
        element:<About/>,
    },
    {
        path: "/1/email",
        element: <Email/>,
    }
]);

