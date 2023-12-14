import React from 'react';
import {loremIpsum} from "lorem-ipsum";
export const Page2:React.FC = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <p>{loremIpsum({count:5})}</p>
        </div>
    );
};

