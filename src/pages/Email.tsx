import React from 'react';
import {loremIpsum} from "lorem-ipsum";

export const Email:React.FC = () => {
    return (
        <div>
            {loremIpsum({count:20})}
        </div>
    );
};

