import React from 'react';
import {loremIpsum} from "lorem-ipsum";

const About:React.FC = () => {
    return (
        <div>
            {loremIpsum({count:15})}
        </div>
    );
};

export default About;