import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // let isActive = false
    return (
        <div className='header'>
            <nav className='container d-flex justify-content-between align-items-center'>
            <logo>
                <div className='fw-bold text-danger'>Quiz Mania</div>
            </logo>
            <div className="links">
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/statics'>Statics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
        </div>
    );
};

export default Header;