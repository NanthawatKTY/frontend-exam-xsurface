import React, {useEffect, useState} from "react";
import './Home.css'
import axios from "axios";
import ProductList from "../components/products/ProductList";

function Home() {

    const [products, setProducts] = useState([]);
    const apiUrl = "https://dummyjson.com/products?skip=5&limit=10"

    useEffect(() => {
        axios.get(apiUrl)
        .then(res => { 
            // console.log("Getting from Products", res.data.products) 
            setProducts(res.data.products)
        })
        .catch(err => { console.log(err) })
    }, [])

    const arrProducts = products.map((product, index) => {
        // console.log(product);
        return (
            <ProductList key={index} product={product}/>
        )
    });

    return(
        <div className='app-container mt-5'>
            <div className="app-grid">
                {arrProducts}
            </div>
        </div>

    )
}

export default Home;