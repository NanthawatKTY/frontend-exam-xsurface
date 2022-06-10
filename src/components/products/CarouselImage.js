import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";

function CarouselImage(props) {

        const {productImgs} = props
        const itemPhoto = []
        
        
        for (const ImgCarouItem of productImgs) {
            itemPhoto.push(
                <Carousel.Item >    
                    <img className="d-block w-100" src={ImgCarouItem} />
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
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