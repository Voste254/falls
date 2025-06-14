import React from "react";
import "./Signup.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Signup = () => {

  const imageUrl = 
  "https://i.ibb.co/JjG6hBxG/Ecommerce-online-shopping-cart-filled-bags-and-packages-Ecommerce-concept-Premium-AI-generated-image.jpg";

 return (
    <>
     <div className="signup-wrapper">
      <div className="signup-card">
        <div
          className="signup-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="signup-form-section">
          <h2>LOG IN</h2>
          <form className="signup-form">

            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <Link >Forgot Password?</Link>
            <Link to='/dashboard'><button type="submit">LOG IN</button></Link>
            <Link to='/signup'><button type="submit">DONT HAVE AN ACCOUNT?</button></Link>
          </form>
        </div>
      </div>
    </div>
    
        <Footer />
    </>
     );
};

export default Signup;
