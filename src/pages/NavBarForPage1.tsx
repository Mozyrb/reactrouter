import React from 'react';
import {Link} from "react-router-dom";

export const NavBarForPage1:React.FC = () => {
    return (
        <nav className='navForPage1'>
            <Link to='/1/about'>About</Link>
            <Link to='/1/email'>Email</Link>
        </nav>
    );
};

