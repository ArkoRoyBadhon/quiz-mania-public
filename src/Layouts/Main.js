import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import {  ToastContainer } from 'react-toastify';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer/>
        </div>
    );
};

export default Main;