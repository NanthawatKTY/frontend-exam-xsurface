import React, {useEffect, useState} from "react";
import './Home.css'
import axios from "axios";

function Home() {

    const [products, setProducts] = useState([]);
    let apiUrl = "https://dummyjson.com/products?skip=5&limit=10"

    useEffect(() => {
        axios.get(apiUrl)
        .then(res => { 
            // console.log("Getting from Products", res.data.products) 
            setProducts(res.data.products)
        })
        .catch(err => { console.log(err) })
    }, [])

    const arrProducts = products.map((product, index) => {
        return (
            <tbody>
                <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><img src={product.thumbnail}/></td>
                </tr>
            </tbody>
        )
    });

    return(
        <div className="d-flex justify-content-center">
            <table>
                <thead>
                    <tr>
                        <th>ID</th >
                        <th >Title</th >
                        <th >Price</th >
                        <th >Image</th >
                    </tr>

                </thead>
                {arrProducts}
            </table>
        </div>
    )
}

export default Home;