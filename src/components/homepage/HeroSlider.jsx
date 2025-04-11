"use client";
import React, { useState, useEffect } from 'react';
import styles from "@/styles/Hero.module.css";
import Image from 'next/image';

const HeroSlider = () => {
  const images = [
    "https://www.91-img.com/gallery_images_uploads/9/d/9d526e8fa4acd95166633c52c5d1d3f958338b33.jpg",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/d/a/-original-imahafrerjkrcsza.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/p/j/a/-original-imah5upykzphmxkv.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/3/d/p/-original-imah6zpws9yh5gca.jpeg?q=70&crop=false"
  ];

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
