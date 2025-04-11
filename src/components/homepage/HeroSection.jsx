import React from 'react'
import HeroSlider from './HeroSlider'
import Container from './Container'
import styles from "@/styles/Hero.module.css"
const HeroSection = () => {
  return (
    <Container >
      <section className={`${styles.hero}`}>
       {/* img Slider */}
       <HeroSlider/>
       
       {/* Texts */}
    <div className={`${styles.hero_text}`}>
      <h1>Your One-Stop Solution!</h1>
      <h5>Seamless Shopping for Techy Gen-Z</h5>
      <button className={`${styles.cta_btn} btn`}>Explore More</button>
    </div>

   
      </section>
    </Container>
  )
}

export default HeroSection
