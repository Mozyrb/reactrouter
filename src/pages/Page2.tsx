import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import NavBar from "./NavBar.tsx";
const Page2:React.FC = () => {
    return (
        <div>
            <NavBar/>
            <h1>Page 2</h1>
            <p>{loremIpsum({count:5})}</p>
        </div>
    );
};

export default Page2;