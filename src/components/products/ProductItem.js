import React, {useState} from "react";
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import { fa} from '@fortawesome/free-regular-svg-icons'
import './ProductItem.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from "./CarouselImage";


function ProductItem(props) {

    const {productTitle, productDesc, productPrice, productThumb, productImgs } = props 
    return(
        <div className="justify-content-center">
            <h3 className="mt-5 mb-5">{productTitle}</h3>
            <h1 className="mt-5 mb-5">{productDesc}</h1>
            <p className="mt-4 mb-4">เริ่มต้นที่ ฿<span>{productPrice}</span></p>
            <div className="container-fluid mt-4 mb-5">
                <button className="btn btn-primary btn-rouned me-2">ซื้อ</button>
                <a href="#" className="ms-2 see-more-link">ดูเพิ่มเติม <i class="fa-regular fa-greater-than"></i></a>
            </div>
            <CarouselImage productImgs={productImgs}/>
            {/* <img className="img-fluid rounded mx-auto d-block mt-4" src={productThumb} alt={productThumb}/> */}

        </div>  

    )
}

export default ProductItem;