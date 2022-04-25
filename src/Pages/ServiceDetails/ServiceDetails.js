import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>service details: {service.name}</h2>
            <div className='mx-auto text-center'>
                <Link to='/checkout'><button className='btn btn-primary'>CheckOut</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;