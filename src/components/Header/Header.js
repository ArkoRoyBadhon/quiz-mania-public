import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // let isActive = false
    return (
        <div className=''>
            {/* <nav className='container d-flex justify-content-between align-items-center'>
                <div>
                    <div className='fw-bold text-danger'>Quiz Mania</div>
                </div>
                <div className="links">
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                    <NavLink to='/statics'>Statics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </nav> */}


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" href="/">Navbar</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/statics'>Statics</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className='' to='/blog'>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;