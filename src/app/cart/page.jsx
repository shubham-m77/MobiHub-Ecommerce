"use client";

import React, { useState } from 'react';
import styles from "@/styles/cartPage.module.css";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useCart } from '@/context/cartContext';

const CartPage = () => {
  const limitTitle = (title) => {
    const words = title.split(' '); // Split the title into words
    const limitedWords = words.slice(0, 5); // Take only the first 10 words
    return limitedWords.join(' ') + (words.length > 5 ? '...' : ''); 
  };
  const { cartItems,clearCart,increaseQuantity,decreaseQuantity } = useCart();
  const [shippingCost, setShippingCost] = useState(0);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + shippingCost;

  const handleShippingChange = (e) => {
    const value = e.target.value === "Express" ? 10 : 0;
    setShippingCost(value);
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    toast.success("Order Placed!");
    clearCart();
  };
  // cartContext.js

  return (
    <div className={styles.cartContainer}>
      <div className="row">
        {/* Left Side - Cart Items */}
        <div className={`col-md-8 ${styles.itemsBox}`}>
          <div className={styles.cartHeadText}>
            <h2>Shopping Cart</h2>
            <h3>{cartItems.length} {cartItems.length === 1 ? "item" : "items"}</h3>
          </div>
          <hr />

          <table className={`table ${styles.cartTable}`}>
            <thead>
              <tr className="text-center">
                <th className="text-start">PRODUCT DETAILS</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody className=''>
            {cartItems.map(item => (
  <tr key={item.id} className="align-middle text-center">
    <td className="d-flex align-items-center" data-label="Product Details">
      <div className={`${styles.cartImage} me-3 position-relative`}>
        <Image src={item.image} fill alt={item.title} className={styles.productImage} />
      </div>
      <div><h5>{limitTitle(item.title)}</h5></div>
    </td>
    <td data-label="Quantity">
      <div className={styles.quantityBox}>
        <button className='btn btn-sm' onClick={()=>decreaseQuantity(item.id)}>-</button>
        <span className='rounded mx-2'>{item.quantity}</span>
        <button className='btn btn-sm' onClick={()=>increaseQuantity(item.id)}>+</button>
      </div>
    </td>
    <td data-label="Price">₹{item.price}</td>
    <td data-label="Total">₹{(item.price * item.quantity).toFixed(2)}</td>
  </tr>
))}
</tbody>

          </table>
        </div>

        {/* Right Side - Order Summary */}
        <div className={`col-md-4 ${styles.summaryBox}`}>
          <h2>Order Summary</h2>
          <hr />
          {cartItems.map((item) => (
            <div key={item.id} className={styles.summaryItem}>
              <span>{limitTitle(item.title)}</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className={styles.shipping}>
            <label>Shipping Method:</label>
            <select className='form-control form-control-sm'  onChange={handleShippingChange}>
              <option>Standard - Free</option>
              <option>Express - $10.00</option>
            </select>
          </div>
          <div className={styles.promoCode}>
            <label>Promo Code (optional):</label>
            <input type="text" placeholder="Enter code" className='form-control form-control-sm '/>
          </div>
          <div className={styles.totalBox}>
            <strong>Total:</strong>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          <button className={styles.checkoutBtn} onClick={checkoutHandler}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
