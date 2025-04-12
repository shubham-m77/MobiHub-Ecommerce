"use client";
import React, { useState } from 'react'
import Container from './Container'
import styles from "@/styles/Products.module.css"
import ProductBox from './ProductBox';
const FeatureProducts = () => {
    const[products,setProducts]=useState([]);
    fetch("https://fakestoreapi.in/api/products?limit=4")
.then(res => res.json())
.then(res => setProducts(res.products)
);

    
  return (
    <div className={`${styles.feature}`}>
      <Container>
        <div className={`d-flex align-items-center justify-content-center flex-column p-3`}>
      <h2 className=''>Bestseller's</h2>
      <hr className={`${styles.primary_hr} m-0`} width="100px" />
      </div>
      <div className={`row ${styles.prd_row} mt-4`}>
      {products.length === 0 ? (
            <h4 className='text-center'>Sorry, Products Not Available...</h4>
          ) : (
            products.map((product) => (
              <div className="col-6 col-md-4 col-lg-3 mb-md-4 p-0" key={product.id}>
              <ProductBox product={product} />
              </div>
            ))
          )}
        
      </div>
      </Container>
    </div>
  )
}

export default FeatureProducts
