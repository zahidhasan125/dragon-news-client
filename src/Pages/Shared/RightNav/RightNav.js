import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-1' variant="outline-success">Sign In With <FaGoogle></FaGoogle></Button>
                <Button variant="outline-dark">Sign In With <FaGithub></FaGithub></Button>
            </ButtonGroup>
            <div className='mt-4'>
                <p>Find Us On</p>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube/> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord/> Discord</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;