import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState("");
    const [tacAccepted, setTacAccepted] = useState(false);
    const { createUser, verifyEmail, updateProfileInfo } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleTacAccepted = (event) => {
        setTacAccepted(event.target.checked)
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        const userInfo = { displayName: name, photoURL: photoURL }

        // console.log(name, photoURL, email, password);
        

        if (password.length < 6 || confirm.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (password === confirm) {
            createUser(email, password)
                .then(result => {
                    setError("");
                    emailVerification();
                    toast.success("Thanks for registering. Please verify your email, (email might be send to spam folder.)")
                    updateUserProfile();
                    form.reset();
                    navigate('/login');
                })
                .catch(error => {
                    console.error(error);
                    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                        setError("Email already in use");
                    }
                })
        }
        else {
            setError("Password does not match");
            return;
        }

    

        const updateUserProfile = () => {
            updateProfileInfo(userInfo)
                .then(() => {
                    console.log("Profile Updated");
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }

    const emailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
            console.log(error);
        })
    }
    

    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handleRegisterSubmit}>
                <h2>Register</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your full name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter your profile picture url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Re-type Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleTacAccepted}
                        label={
                        <>I accept the <Link to='/terms'>terms and conditions</Link></>
                    } required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!tacAccepted}>
                    Register
                </Button>
                <Form.Text className='text-danger ms-2'>
                    {error}
                </Form.Text>
                <p>
                    Already have an account? <Link to='/login'>Please Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;