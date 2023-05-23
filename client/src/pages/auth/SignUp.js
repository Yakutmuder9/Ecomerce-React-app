import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState(true);

  return (
    <div className="signup-container">
      <div className="breadcrumb">Home / Create Account</div>
      <div className="container">
        <div className="header">
          <p>Create New Account</p>
        </div>
        <div className="signup-form">
          <div className="first-name field">
            <p>First Name</p>
            <input type="text" required />
            {error && <span>* Please Fill Your First Name</span>}
          </div>
          <div className="last-name field">
            <p>Lasr Name</p>
            <input type="text" required />
            {error && <span>* Please Fill Your Last Name</span>}
          </div>
          <div className="email field">
            <p>Email Address</p>
            <input type="email" required />
            {error && <span>* Please Fill Your Last Name</span>}
          </div>
          <div className="password-field">
            <p>Password</p>
            <input type="password" required />
            {error && <span>* Please Fill Your Last Name</span>}
          </div>
          <div className="confirm-password field">
            <p>Confirm Password</p>
            <input type="password" />
            {error && <span>* Please Fill Your Last Name</span>}
          </div>
          <div className="phone field">
            <p>Phone Number</p>
            <input type="text" />
          </div>
          <div className="state field">
            <p>State</p>
            <select name="Choose a State" id="">
              <option value="">Choose a State</option>
              <option value="MD">MD</option>
              <option value="PA">PA</option>
            </select>
          </div>
          <div className="country field">
            <p>Country</p>
            <select name="" id="">
              <option value="Country">United States</option>
              <option value="Country">Canada</option>
            </select>
          </div>
          <div className="address-line-one field">
            <p>Address Line 1</p>
            <input type="text" />
          </div>
          <div className="address-line-two field">
            <p>Address Line 2</p>
            <input type="text" />
          </div>
        </div>
        <div className="create-btn-cont">
          <button className="btn">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
