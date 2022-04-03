import React from 'react';
import './ErrorPage.css'
import image from '../../logo.png';

const ErrorPage = () => {
    return (
        <div className='error d-flex align-items-center justify-content-center flex-column mt-5'>
            <img src={image} alt="" />
            <h1>404</h1>
            <p>The page you were looking for doesn't exist</p>
        </div>
    );
};

export default ErrorPage;