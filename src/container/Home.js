import React, {useEffect, useState} from "react";
import './Home.css'
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import ProductList from "../components/products/ProductList";

function Home() {

    const [products, setProducts] = useState([]);
    const apiUrl = "https://dummyjson.com/products?skip=5&limit=10"
    const itemProduct = []

    useEffect(() => {
        axios.get(apiUrl)
        .then(res => { 
            setProducts(res.data.products)
        })
        .catch(err => { console.log(err) })
    }, [])

    const arrProducts = products.map((product, index) => {
        return (
            <ProductList key={index} product={product}/>
        )
    });

    // console.log("Arrr logg" + products);
    for (const ProductCarouItem of arrProducts) {
        itemProduct.push(
            <Carousel.Item >   
                {/* <div className="app-grid"> */}
                    {/* {arrProducts} */}
                {ProductCarouItem}
                {/* </div> */}
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

    return(
            <div className='app-container mt-5'>
                <Carousel>
                    {itemProduct}
                </Carousel>
            </div>
    )
}

export default Home;