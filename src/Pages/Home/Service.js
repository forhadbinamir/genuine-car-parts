import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, price, picture, name, description } = service
    const navigate = useNavigate()
    const handleServiceBtn = id => {
        navigate(`service/${id}`)
    }
    return (
        <div className='rounded p-5 relative shadow'>
            <img className='w-full h-60' src={picture} alt="" />
            <h2 className='font-bold text-2xl'>{name}</h2>
            <p className='font-semibold rounded'>{price}</p>
            <p className='text-gray-500 mb-10'>{description.slice(0, 250)}</p>
            <button onClick={() => handleServiceBtn(_id)} className='w-full bg-gray-300 py-2 rounded shadow font-bold absolute bottom-0 right-0'>Book:{name}</button>
        </div>
    );
};

export default Service;