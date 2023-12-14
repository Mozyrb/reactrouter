import {NavBar} from "../pages/NavBar.tsx";
import {Outlet} from "react-router-dom";

export const DefaultLayout = ()=>{
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>

    )
}