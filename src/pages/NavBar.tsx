import React from 'react';
import {Link} from "react-router-dom";

const NavBar:React.FC = () => {
    return (
        <nav className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/page1'>Page1</Link>
            <Link to='/page2'>Page2</Link>
        </nav>
    );
};

export default NavBar;