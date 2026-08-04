import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../styles/about.css";
import MobileBottomNav from "../components/MobileBottomNav";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">

        <section className="about-hero">
          <h1>About Pepper</h1>
          <p>
            Premium Shopping Experience for Modern Lifestyle.
          </p>
        </section>

        <section className="about-content">

          <div className="about-card">
            <h2>Our Story</h2>
            <p>
              Pepper was created with one simple goal — to provide customers
              with premium products, trusted quality, and a luxurious shopping
              experience. We carefully curate every collection to ensure that
              every purchase brings style, value, and satisfaction.
            </p>
          </div>

          <div className="about-grid">

            <div className="info-box">
              <i className="bi bi-award"></i>
              <h3>Premium Quality</h3>
              <p>
                Every product is selected with strict quality standards.
              </p>
            </div>

            <div className="info-box">
              <i className="bi bi-truck"></i>
              <h3>Fast Delivery</h3>
              <p>
                Safe and quick delivery to your doorstep.
              </p>
            </div>

            <div className="info-box">
              <i className="bi bi-shield-check"></i>
              <h3>Secure Shopping</h3>
              <p>
                Your data and payments are protected with industry standards.
              </p>
            </div>

            <div className="info-box">
              <i className="bi bi-headset"></i>
              <h3>24/7 Support</h3>
              <p>
                Friendly support whenever you need assistance.
              </p>
            </div>

          </div>

          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              We believe shopping should be effortless, elegant, and enjoyable.
              Pepper combines premium design, modern technology, and trusted
              service to create an unforgettable online shopping experience.
            </p>
          </div>

          <div className="stats">

            <div className="stat">
              <h2>10K+</h2>
              <span>Happy Customers</span>
            </div>

            <div className="stat">
              <h2>500+</h2>
              <span>Premium Products</span>
            </div>

            <div className="stat">
              <h2>99%</h2>
              <span>Customer Satisfaction</span>
            </div>

          </div>

        </section>

      </div>

      <Footer />
      <MobileBottomNav/>
    </>
  );
}

export default About;