import React from 'react';
import './ErrorPage.css'


const Error = () => {
    return (
        <div className='d-flex justify-content-center mt-5 pt-5 not-found-page'>
            <h2>Sorry!! </h2>
            <h2><span className='text-danger'>404</span> page not found</h2>
        </div>
    );
};

export default Error;