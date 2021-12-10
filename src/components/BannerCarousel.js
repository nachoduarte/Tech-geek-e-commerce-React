import React from 'react';
import { Carousel } from 'react-bootstrap';

function BannerCarousel() {

    const style = {
        marginTop: "125px"
    }
    return(
        <Carousel style={style}>
            <Carousel.Item>
            <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1639163047/bannerasus3_wpn8pb.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1639163047/notebooks_zrjzye.png" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1639163047/asrock_tbnob0.png" alt="Third slide" />
            </Carousel.Item>
            
        </Carousel>
    )
};

export default BannerCarousel;