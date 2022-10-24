import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PasswordReset = () => {

    const {resetPassword} = useContext(AuthContext)
    const handlePasswordReset = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        resetPassword(email)
            .then(() => {
                toast.success("Password reset Email has been sent.")
            })
            .catch(error => {
            console.log(error);
            })
        event.target.reset();
    }
    return (
        <Form  className='w-50 mx-auto' onSubmit={handlePasswordReset}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Send password reset Email
            </Button>
        </Form>
    );
};

export default PasswordReset;