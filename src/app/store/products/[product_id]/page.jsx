"use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Products.module.css';
import Container from '@/components/homepage/Container';
import { getProducts } from '@/library'; // Ensure correct import
import { useCart } from '@/context/cartContext';
const ProductDetails = async ({ params }) => {
  const { product_id } = params;
  const { addToCart } = useCart();
  try {
    // Fetch product data based on the dynamic product_id
    const product = await getProducts(product_id);

    if (!product) {
      return <p>Product not found</p>;
    }

    return (
      <Container>
        <div className={styles.productDetailContainer}>
          <div className={styles.productImage}>
            <Image
              src={product.image} // Make sure the image path is correct
              alt={product.title}
              width={400}
              height={400}
              className='rounded shadow-sm'
            />
          </div>
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
           
            <div className={styles.productPriceSection}>
            <p className={`${styles.productPrice}`}>₹{product.price} <span className={`${styles.maximum_price}`}> ₹({product.price+product.discount})</span>
              {product.discount && (
                <span className={styles.productDiscount}>-{product.discount}% off</span>
              )}</p>
            </div>
            <div className={styles.productDetails}>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Model:</strong> {product.model}</p>
            </div>
            <button className={styles.buyNowBtn} onClick={() => addToCart(product)}>Add to Cart</button>
            <div className={`d-flex flex-column mt-4 ${styles.desc_box}`}>
            <p><strong>Specifications:</strong></p>
            <hr className={`${styles.primary_hr} w-25`}/>
            </div>
            <p className={styles.productDescription}>{product.description}</p>
           
          </div>
          
        </div>
      </Container>
    );
  } catch (error) {
    return <p>Failed to load product details</p>;
  }
};

export default ProductDetails;
