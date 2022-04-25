import React, { useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../FireBase.init';

const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    const navigate = useNavigate()
    const handleRegisterLink = () => {
        navigate(`/register`)
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmitForm = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('sent email')
    }


    return (
        <div className='container w-50 mx-auto mt-5 border rounded-lg shadow p-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorText}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-10'>
                New to Here <span onClick={handleRegisterLink} className='text-orange-400 font-bold cursor-pointer '>Please Register</span>
            </p>
            <p className='text-center mt-2'>
                Forget Password<span onClick={handleResetPassword} className='text-orange-400 font-bold cursor-pointer'> Reset Password</span>
            </p>
            <div className='text-center'>
                <button className='btn btn-primary mr-2'>Sign in With google</button>
                <button className='btn btn-primary mr-2'>Sign in With facebook</button>
                <button className='btn btn-primary'>Sign in With github</button>
            </div>
        </div>
    );
};

export default Login;