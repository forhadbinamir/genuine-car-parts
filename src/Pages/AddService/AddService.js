import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Your Service</h2>
            <form className='d-flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2 rounded border ' placeholder='Name' {...register("name")} />
                <textarea className='mb-2 p-2 rounded border ' placeholder='Description' {...register("description")} />
                <input className='mb-2 p-2 rounded border ' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 p-2 rounded border ' placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='mb-2 p-2 rounded border ' type="submit" />
            </form>
        </div>
    );
};

export default AddService;