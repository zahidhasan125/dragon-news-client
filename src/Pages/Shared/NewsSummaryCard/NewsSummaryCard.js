import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, image_url, author, details, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author?.img} style={{ height: '50px' }} roundedCircle />
                        <div className='ms-2'>
                            <h5 className='mb-0'>
                                {author?.name}
                            </h5>
                            <small>{author?.published_date}</small>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <div>
                        {details.length > 200 ?
                            <Card.Text>{details.slice(0, 200) + '....'}<Link to={`/news/${_id}`}>Read more</Link></Card.Text>
                            :
                            <Card.Text>{details}</Card.Text>
                        }
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div><FaStar className='text-warning me-1'/>{rating?.number}</div>
                    <div><FaRegEye className='me-1'/>{total_view}</div>                    
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;