import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import NavBar from "./NavBar.tsx";

const Home: React.FC = () => {
    return (
        <>
            <NavBar/>
            <span>{loremIpsum({count:50})}</span>
        </>
    )
};

export default Home;