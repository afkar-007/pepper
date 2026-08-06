import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"


function Footer() {
  return (
    <footer className="footer">

      {/* Newsletter */}

      <section className="newsletter-section">

        <div className="newsletter-content">

          <div className="newsletter-left">

            <div className="mail-icon">
              <i className="bi bi-envelope"></i>
            </div>

            <div>

              <h2>
                STAY IN THE <span>LOOP</span>
              </h2>

              <p>
                Subscribe to receive exclusive offers,
                new arrivals and premium collections.
              </p>

            </div>

          </div>

          <div className="newsletter-right">

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>
                SUBSCRIBE
              </button>

            </div>

            <small>
              We respect your privacy. Unsubscribe anytime.
            </small>

          </div>

        </div>

      </section>

      {/* Feature Section */}

      <section className="footer-features">

        <div className="feature">

          <i className="bi bi-truck"></i>

          <div>

            <h4>FREE DELIVERY</h4>

            <p>Free shipping on all orders</p>

          </div>

        </div>

        <div className="feature">

          <i className="bi bi-arrow-repeat"></i>

          <div>

            <h4>EASY RETURNS</h4>

            <p>30-Day Return Policy</p>

          </div>

        </div>

        <div className="feature">

          <i className="bi bi-shield-check"></i>

          <div>

            <h4>SECURE PAYMENT</h4>

            <p>100% Secure Checkout</p>

          </div>

        </div>

        <div className="feature">

          <i className="bi bi-headset"></i>

          <div>

            <h4>24/7 SUPPORT</h4>

            <p>Always here to help</p>

          </div>

        </div>

      </section>

      {/* Main Footer */}

      <section className="footer-main">

        <div className="footer-brand">

          <h1>Pepper</h1>

          <p>
            Your one-stop destination for premium
            products and luxury shopping experience.
          </p>

          <div className="social-icons">

            <Link to="https://www.facebook.com/">
              <i className="bi bi-facebook"></i>
            </Link>

            <Link to="https://www.instagram.com/afkar._.007/?hl=en">
              <i className="bi bi-instagram"></i>
            </Link>

            <Link to="https://x.com/?lang=en">
              <i className="bi bi-twitter-x"></i>
            </Link>

            <Link to="https://www.youtube.com/">
              <i className="bi bi-youtube"></i>
            </Link>

          </div>

        </div>

        <div className="footer-links">

          <h3>SHOP</h3>

          <Link to="/products/phones">Smart Phones</Link>

          <Link to="/products/laptops">Laptops</Link>

          <Link to='/products/dress'>Fashion</Link>

          <Link to='/products/headphone'>Audio</Link>

        </div>

        <div className="footer-links">

          <h3>CUSTOMER SERVICE</h3>

          <Link >Contact Us</Link>

          <Link to="/orders">Track Order</Link>

          <Link >Returns</Link>

          <Link >FAQ</Link>

        </div>

        <div className="footer-links">

          <h3>COMPANY</h3>

          <Link to="/about">About Us</Link>

          <Link to="/about">Privacy Policy</Link>

          <Link to="/about">Terms</Link>

          <Link to="/about">Careers</Link>

        </div>

        <div className="footer-links">

          <h3>CONTACT</h3>

          <p>
            <i className="bi bi-telephone"></i> +91 95141 89546
          </p>

          <p>
            <i className="bi bi-envelope"></i> afkar3547@gmail.com
          </p>

          <p>
            <i className="bi bi-geo-alt"></i> Kanyakumari, India
          </p>

        </div>

      </section>

      {/* Payments */}

      <section className="payment-section">

        <h4>WE ACCEPT</h4>

        <div className="payments">

          <i className="bi bi-credit-card-2-front"></i>
          <i className="bi bi-credit-card"></i>
          <i className="bi bi-wallet2"></i>
          <i className="bi bi-bank"></i>

        </div>

      </section>

      {/* Bottom */}

      <section className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Pepper. All Rights Reserved.
        </p>

        <button className="top-btn">
          <i className="bi bi-arrow-up"></i>
        </button>

      </section>

    </footer>
  );
}

export default Footer;