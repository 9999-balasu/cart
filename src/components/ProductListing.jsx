import axios from 'axios'
import React from 'react'

import  { useEffect, useState } from 'react'

import Product from './Product';

const ProductListing = () => {
    const [products , setProducts] = useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products')
            .then(res=> setProducts(res.data))
            
    },[])
    console.log(products)
  return (
    <div>
       <h1>I am ProductListing</h1>
       {products.map(product => <Product key={product.id}
      id= {product.id}
        title ={product.title}
        price={product.price}
        image={product.image}
        rating={product.rating.rate} />)}
    </div>
  )
}

export default ProductListing
