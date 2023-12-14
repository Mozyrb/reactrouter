import React from 'react';
import {Link} from "react-router-dom";

export const NavBar:React.FC = () => {
    return (
        <nav className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/1'>Page1</Link>
            <Link to='/2'>Page2</Link>
        </nav>
    );
};

