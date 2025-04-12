  "use client";
  import React from 'react'
  import Link from 'next/link'
  import Image from 'next/image';
  import styles from "@/styles/Products.module.css"
  import { useCart } from '@/context/cartContext';

  const ProductBox = ({product}) => {
    const limitTitle = (title) => {
      const words = title.split(' '); // Split the title into words
      const limitedWords = words.slice(0, 5); // Take only the first 10 words
      return limitedWords.join(' ') + (words.length > 5 ? '...' : ''); 
    };
    const { addToCart } = useCart();
    return (
    
      <div className={`${styles.card_main} card shadow-sm rounded-lg rounded-none mx-md-4 m-0 `}>
          <Link href={"/store/products/"+product.id}><div className="card-img">
        <Image className={`${styles.productImg}`} src={product.image} fill alt={product.title} />
        </div>
        <hr />
        <div className={`${styles.card_text}`}>
          <h3>{limitTitle(product.title)}</h3>
          <p className={`${styles.price}`}>₹{product.price} <span className={`${styles.max_price}`}> ₹({product.price+product.discount})</span><span className={`${styles.disc_percent}`}> {product.discount}% off</span>
          </p>
          <button className={`btn ${styles.add_cart_btn}`} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        </Link>
      </div>
    
    )
  }

  export default ProductBox
