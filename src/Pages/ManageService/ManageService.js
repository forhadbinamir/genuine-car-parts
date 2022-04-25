import React from 'react';
import useService from '../Hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useService()

    const handleService = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })

            console.log('delete service')
        }
    }
    return (
        <div className='w-50 mx-auto'>
            {
                services.map(service => <h5 key={service._id}>{service.name} <button onClick={() => handleService(service._id)} className='btn btn-dark'>delete</button> </h5>)
            }
        </div>
    );
};

export default ManageService;