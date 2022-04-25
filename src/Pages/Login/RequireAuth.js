import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../FireBase.init';
import Loading from '../Hooks/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h2 className='text-center text-4xl'>Please verified your email address</h2>
            <h2 className='text-center'>verified successfull</h2>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;