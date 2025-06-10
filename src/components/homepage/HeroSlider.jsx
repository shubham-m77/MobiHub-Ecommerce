"use client";
import React, { useState, useEffect } from 'react';
import styles from "@/styles/Hero.module.css";
import Image from 'next/image';
import oppo from "@/images/oppo_phone.png"
import vivo from "@/images/vivo_phone.png"
import smartwatch from "@/images/smartwatch.png"
import earbuds from "@/images/earbuds.png"


const HeroSlider = () => {
  const images = [
    vivo,
    smartwatch,
    oppo,
    earbuds ] 

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`${styles.imageSection}`}>
      <div className={`${styles.slider}`}>
        {images.map((image, index) => (
            <Image
            key={"Slide"+index}
              alt={"Slide"+index}
              src={image} 
              className={`${styles.slide} ${currentSlide === index && styles.active} w-100`} fill
            />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
