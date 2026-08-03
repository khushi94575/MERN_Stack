import React from "react";
import desert from "../assets/desert.jpeg"
import "../index.css";

function Login() {
  return (
    <div className="mainSignupContainer">
      <div className="leftSection">
        <img src={desert} alt="desert" />

        <p>
          Welcome Back
        </p>
      </div>

      <div className="rightSection">
        <h2 id="registrationFromHeading">Login</h2>

        <form>
          <input type="email" id="email" placeholder="Email Address" required />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />

          <button type="submit">Log In</button>
        </form>

        <div className="socialLogin">
          <div className="divider">
            <span>Or sign in with</span>
          </div>

          <div className="signupButtons">
            <button type="button" className="socialBtn googleBtn">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
              />
              Google
            </button>

            <button type="button" className="socialBtn appleBtn">
              <img
                src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
                alt="Apple"
              />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
