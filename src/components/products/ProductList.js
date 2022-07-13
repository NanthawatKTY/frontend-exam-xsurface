import React from 'react'
import './ProductList.css'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import ProductItem from './ProductItem'
import Carousel from 'react-bootstrap/Carousel';

const ProductList = (props) => {

  const {product} = props  
  console.log(product);
  const itemProduct = []

  // for (const ProductCarouItem of product) {
  //   console.log(ProductCarouItem);
    // itemProduct.push(
    //       <Carousel.Item >    
    //           <ProductItem product={ProductCarouItem}/>
    //           {/* <img className="img-fluid rounded mx-auto d-block mt-3" src={ImgCarouItem} /> */}
    //           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    //               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //               <span class="visually-hidden">Previous</span>
    //           </button>
    //           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    //               <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //               <span class="visually-hidden">Next</span>
    //           </button>
    //       </Carousel.Item>
    //   )    
  // }

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