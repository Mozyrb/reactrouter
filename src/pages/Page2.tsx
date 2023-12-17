import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import {Outlet} from "react-router-dom";
export const Page2:React.FC = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <p>{loremIpsum({count:5})}</p>
            <Outlet/>
        </div>
    );
};

