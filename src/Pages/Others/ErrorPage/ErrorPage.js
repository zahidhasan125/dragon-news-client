import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Card className='w-50 mx-auto mt-5'>
            <Card.Header as="h5">404</Card.Header>
            <Card.Body>
                <Card.Title>NOT FOUND! 404</Card.Title>
                <Card.Text>
                    The page you're looking for is not found.
                </Card.Text>
                <Link to="/"><Button variant="primary">Back to Home</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default ErrorPage;