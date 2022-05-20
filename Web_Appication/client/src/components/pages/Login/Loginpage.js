import React from 'react'
import "./LoginPage.css";

function Loginpage() {
  return (
    <div className="mainContainer">
    <div className="loginContainer">
      <img src="logo.jpg" alt="logo" />

      <div className="inputContainer">
        <h3>Email Address</h3>

        <input type="text" placeholder="Email" />
      </div>

      <div className="inputContainer">
        <h3>Password</h3>
        <input type="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
  </div>
  )
}

export default Loginpage;