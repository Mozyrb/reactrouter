import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import NavBar from "./NavBar.tsx";
import NavBarForPage1 from "./NavBarForPage1.tsx";

const Page1:React.FC = () => {
    return (
        <div>
            <NavBar/>
            <h1>Page 1</h1>
            <p className='marginPage1'>{loremIpsum({count:5})}</p>
            <NavBarForPage1/>
        </div>
    )
};

export default Page1