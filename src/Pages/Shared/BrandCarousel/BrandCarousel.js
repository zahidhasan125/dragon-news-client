import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assets/BrandImages/Brand1.png'
import Brand2 from '../../../assets/BrandImages/Brand2.png'

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>            
        </Carousel>
    );
};

export default BrandCarousel;