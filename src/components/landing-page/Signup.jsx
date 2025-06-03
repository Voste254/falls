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
          <h2>SIGN UP</h2>
          <form className="signup-form">
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Country" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <Link to='/dashboard'><button type="submit">Sign up</button></Link>
             <Link to='/login'><button type="submit">Already have an account?</button></Link>
          </form>
        </div>
      </div>
    </div>
    
        <Footer />
    </>
     );
};

export default Signup;
