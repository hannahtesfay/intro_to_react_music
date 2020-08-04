import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="navlink" activeClassName="current" to="/albums">Albums</NavLink>
            <NavLink className="navlink" activeClassName="current" to="/more">More</NavLink>
        </nav>
    );
}

export default NavBar;
