import React from 'react'
import '../components_Styles/Hero.css'
import hero from '../assets/acc.png'

function Hero() {
  return (
    <>
  
  <section className="hero">

      <div className="spotlight left"></div>
      <div className="spotlight right"></div>

      <div className="hero-floor"></div>

      <div className="hero-content">

        <span className="hero-tag">
          — ELEVATE EVERY PURCHASE —
        </span>

        <h1>PEPPER</h1>

        <p>
          Premium electronics, fashion and lifestyle
          products crafted for modern living.
        </p>

        <button className="shop-btn">
          SHOP NOW →
        </button>

      </div>

      <div className="hero-right">

        <img
          src={hero}
          alt="Hero Products"
          className="hero-image"
        />

      </div>

    </section>
  </>
  )
}

export default Hero