import React from 'react';
import './ErrorPage.css'
import image from '../../logo.png';
import img from '../../image/error.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='error d-flex align-items-center justify-content-center flex-column mt-5 p-5'>
            <img src={image} alt="logo"/>
            <img src={img} alt="" />
            <p>The page you were looking for doesn't exist</p>
            <button className='back-btn' onClick={()=>navigate("/home") }>Go to home</button>
        </div>
    );
};

export default ErrorPage;