import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import {Outlet, useLocation} from "react-router-dom";
export const Page2:React.FC = () => {
    const location=useLocation();
    return (
        <div>
            <h1>Page 2</h1>
            <p>{loremIpsum({count:5})}</p>
            <hr/>
            <p>Current location is:{location.pathname}</p>
            <Outlet/>
        </div>
    );
};

