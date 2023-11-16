import React, { useState } from "react";
import '../styles/navbar.css'; // Include your Navbar CSS file
import TempSearch from "./TempSearch";

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="navbar">
      <div className="brand-match">
        <div className="navtitle">...NightIn?</div>
      </div>
      <div className="navbuttons">
        <button onClick={toggleSignup}>Signup</button>
        <a href="/auth/google" id="login-button" className="login-button">
          <button>Login</button>
        </a>
        <div className="temp-search">
        <TempSearch/>
        </div>
      </div>

      {showSignup && (
        <div className="signup-form">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
