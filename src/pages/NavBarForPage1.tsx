import React from 'react';
import {Link} from "react-router-dom";

const NavBarForPage1:React.FC = () => {
    return (
        <nav className='navForPage1'>
            <Link to='/about'>About</Link>
            <Link to='/email'>Email</Link>
        </nav>
    );
};

export default NavBarForPage1;