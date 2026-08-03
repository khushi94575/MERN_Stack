import React from "react";
import desert from "../assets/desert.jpeg";
import "../index.css";

function Signup() {
  return (
    <div className="mainSignupContainer">
      <div className="leftSection">
        <img src={desert} alt="desert" />

        <p>
          Capturing Moments,
          <br />
          Creating Memories
        </p>
      </div>

      <div className="rightSection">
        <h2 id="registrationFromHeading">Create an Account</h2>

        <p>
          Already have an account? <a href="#">Log in</a>
        </p>

        <form>
          <div id="formNameSection">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />

          <div id="checkboxElement">
            <input
              type="checkbox"
              id="termsAndConditions"
              required
            />

            <label htmlFor="termsAndConditions">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit">
            Create Account
          </button>
        </form>

        <div className="socialLogin">
          <div className="divider">
            <span>Or sign up with</span>
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

export default Signup;