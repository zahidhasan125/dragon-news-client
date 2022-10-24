import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateProfileInfo } = useContext(AuthContext);

    // system one
    const [name, setName] = useState(user.displayName);

    const handleNameChange = event => {
        setName(event.target.value)
    }
        
    // system two
    // for using Ref, have to set ref on the element
    const photoUrlRef = useRef(user.photoURL);
    
    const handleUpdateProfile = event => {
        event.preventDefault();
        console.log(photoUrlRef.current.value);
        const userInfo = { name: name, photoURL: photoUrlRef.current.value}
        updateProfileInfo(userInfo)
    }

    return (
        <Form onSubmit={handleUpdateProfile} className="w-50 mx-auto">
            <h2>Update your Profile</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" placeholder="Image Url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default Profile;