import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

function Services() {
      useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="services-container">
      <div className="individual" data-aos="fade-up">
        <i className="fas fa-shipping-fast fa-3x"></i>
        <h3>Fast & Reliable Delivery</h3>
        <p>We offer swift nationwide delivery so your items reach you quickly and safely.</p>
      </div>

      <div className="individual" data-aos="fade-up">
        <i className="fas fa-headset fa-3x"></i>
        <h3>24/7 Customer Support</h3>
        <p>Our team is available anytime to help you with questions, returns, or tracking.</p>
      </div>

      <div className="individual" data-aos="fade-up">
        <i className="fas fa-lock fa-3x"></i>
        <h3>Secure Payments</h3>
        <p>Enjoy peace of mind with our trusted payment systems and data protection.</p>
      </div>

      <div className="individual" data-aos="fade-up">
        <i className="fas fa-tags fa-3x"></i>
        <h3>Exclusive Discounts</h3>
        <p>Get amazing deals and offers on a wide variety of products every week.</p>
      </div>

      <div className="individual" data-aos="fade-up">
        <i className="fas fa-undo fa-3x"></i>
        <h3>Easy Returns</h3>
        <p>Not satisfied? Return your items easily with our smooth return policy.</p>
      </div>

      <div className="individual" data-aos="fade-up">
        <i className="fas fa-star fa-3x"></i>
        <h3>Trusted Brands</h3>
        <p>Shop quality products from the most trusted and loved brands worldwide.</p>
      </div>
    </div>
  );
}

export default Services;
