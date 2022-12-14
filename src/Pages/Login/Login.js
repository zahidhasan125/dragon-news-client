import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState("");
    const { userLogin, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError("");
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    logOut()
                        .then(() => { })
                        .catch(error => {
                        console.log(error)
                    })
                    toast.error("Please verify your Email First")
                }
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("User Not Found");
                }
                else if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError("Wrong Password");
                }
            })
    }
    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger ms-2'>
                    {error}
                </Form.Text>
                <p>
                    Forgot password? <Link to='/reset-password'>Request reset.</Link>
                </p>
                <p>
                    New to this website? <Link to='/register'>Create an account</Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;