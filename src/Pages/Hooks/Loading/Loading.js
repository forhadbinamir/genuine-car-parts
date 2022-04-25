import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div style={{ height: '400px' }} className='w-100 d-flex justify-center items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;