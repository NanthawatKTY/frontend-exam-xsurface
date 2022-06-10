import React from 'react'
import './ProductList.css'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductList = (props) => {

  const {product} = props  

  return (
    <div className="mt-2 mb-2">
        <ProductItem 
            productTitle={product.title} 
            productDesc={product.description} 
            productPrice={product.price} 
            productThumb={product.thumbnail}
            productImgs={product.images}
        />
        <hr className='mt-5'/>
    </div>
  )
}

export default ProductList