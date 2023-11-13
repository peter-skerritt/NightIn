import React from "react";
import App from "./App";

function Navbar(){
    return(
    <div className="navbar">
        <div className="brand-match">
            <div className="navtitle">...NightIn?</div>
        </div>
        <div className="navbuttons">
            <button>Signup</button>
            <a href="/auth/google" id="login-button" className="login-button">
            <button>Login</button>
            </a>
        </div>
    </div>
)};

export default Navbar