import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const { author, title, image_url, details, category_id, rating } = useLoaderData();
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div><strong>Author:</strong>{author?.name}</div>
                        <div><strong>Published Date:</strong>{author?.published_date}</div>
                        <div><FaStar className='text-warning me-1' />{rating?.number}</div>

                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Button as={Link} to={`/category/${category_id}`} variant="outline-primary">Back to this Category</Button>
            </Card>
        </div>
    );
};

export default News;