import { useState } from "react";

const SignIn = () => {
  const [error, setError] = useState(true);
  return (
    <div className="sign-in">
      <div className="sign-img">
        <h1>Sign In</h1>
      </div>

      <div className="breadcrumb">Home / Sing In</div>
      <div className="container">
        <div className="form-field-card">
          <p>Email Address</p>
          <input type="email" placeholder="" name="email" required /><br />
          {error && <span>* Please Fill Your First Name</span>}

          <p className="password-txt">Password</p>
          <input type="password" placeholder="" name="pasword" required /><br />
          {error && <span>* Please Fill Your First Name</span>}
          <div className="forgot-password">
            <a href="forgot-password">
              <i>Forgot Pasowrd?</i>
            </a>
          </div>
          <div className="sign-btn">
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="signup-card">
          <h4>New Customer?</h4>
          <p>Create an account with us to:</p>
          <ul>
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
            <li>Save items to your wish list</li>
          </ul>
          <a href="signup">
            <button className="btn">Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
