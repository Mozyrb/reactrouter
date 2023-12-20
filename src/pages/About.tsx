import React from 'react';
import {loremIpsum} from "lorem-ipsum";
import {useParams} from "react-router-dom";


export const About:React.FC = () => {
    const {someParam} = useParams();
    return (
        <div>
            <p>{loremIpsum({count: 15})}</p>
            {someParam ? (
                <p>Parameter from URL: {someParam}</p>
            ) : (
                <p>No parameter provided in the URL.</p>
            )}
        </div>
    );
};

