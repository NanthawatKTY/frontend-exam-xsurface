import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";

function CarouselImage(props) {

        const {productImgs} = props
        const itemPhoto = []
        
        
        for (const ImgCarouItem of productImgs) {
            itemPhoto.push(
                <Carousel.Item >    
                    <img className="img-fluid rounded mx-auto d-block mt-3" src={ImgCarouItem} />
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </Carousel.Item>
            )    
        }

        return (
            <Carousel fade>
                {itemPhoto}
            </Carousel>
        );
}

export default CarouselImage;