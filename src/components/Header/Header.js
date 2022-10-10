import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='container d-flex justify-content-between align-items-center'>
            <logo>
                <div className='fw-bold text-danger'>Quiz Mania</div>
            </logo>
            <div className="links">
                <NavLink className="ms-3" to='/'>Home</NavLink>
                <NavLink className="ms-3" to='/'>Statics</NavLink>
                <NavLink className="ms-3" to='/'>Blog</NavLink>
            </div>
        </nav>
        </div>
    );
};

export default Header;