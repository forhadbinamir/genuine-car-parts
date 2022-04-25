import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [date, setDate] = useState();

    const getYear = () => {
        setDate(new Date().getFullYear());
    }
    useEffect(() => {
        getYear();
    }, [])
    return (
        <footer className='bg-dark py-3 mt-5'>
            <p className='text-center items-center text-gray-300'><small>&copy;Copyright {date} Developed By <Link to={{ pathname: "https://forhadbinamir.com", state: { foo: 'bar' } }} target="_blank">Forhad Bin amir</Link></small> All Rights Reserved</p>
        </footer >
    );
};

export default Footer;