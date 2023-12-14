import React from 'react';
import {loremIpsum} from "lorem-ipsum";

export const Home: React.FC = () => {
    return (
        <>
            <span>{loremIpsum({count:50})}</span>
        </>
    )
};

