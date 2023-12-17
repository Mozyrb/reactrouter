import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import {NavBarForPage1} from "./NavBarForPage1.tsx";
import {Outlet} from "react-router-dom";

export const Page1:React.FC = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <p className='marginPage1'>{loremIpsum({count:5})}</p>
            <NavBarForPage1/>
            <Outlet/>
        </div>
    )
};

