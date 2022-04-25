import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../FireBase.init';
const Register = () => {
    const [check, setCheck] = useState(false)
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const addressRef = useRef('')
    const [createUserWithEmailAndPassword, user2, error2,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorText;
    if (error || error1) {
        errorText = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }
    const handleLoginText = () => {
        navigate('/login')
    }

    const handleRegisterBtn = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const address = addressRef.current.value;
        // const check = event.terget.terms.checked;
        // console.log(name, email, password,)

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Update profile')

        if (user2) {
            console.log(user2)
            navigate('/login')
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5 border rounded-lg shadow p-5'>
            <h2>Please Register</h2>
            <Form onClick={handleRegisterBtn}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} name="name" placeholder="Enter Your Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" ref={addressRef} placeholder="Address" required />
                </Form.Group>


                <Form.Group className={`${check ? 'text-primary' : 'text-danger'}`} controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setCheck(!check)}

                        type="checkbox" label="Accept genuine car parts Term and condition" />
                </Form.Group>
                <Button disabled={!check} variant="primary" type="submit">
                    Register
                </Button>
                {errorText}
            </Form>
            <p className='text-center mt-10'>
                Already have an account <span onClick={handleLoginText} className='text-orange-400 font-bold cursor-pointer '>Please Login</span>
            </p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mr-2'>Sign in With google</button>
                <button className='btn btn-primary mr-2'>Sign in With facebook</button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary'>Sign in With github</button>
            </div>
        </div>
    );
};

export default Register;