import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginSchema } from "../../utiles/validation";
import { loginUser } from "./../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import { useEffect, useState } from "react";

const SignIn = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        dispatch(loginUser(values));
      } catch (error) {
        console.log("Login failed:", error);
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/account');
    }
  }, [isSuccess]);
  return (
    <div className="sign-in">
      {isLoading && <Loader />}
      <div className="sign-img">
        <h1>Sign In</h1>
      </div>

      <div className="breadcrumb">Home / Sing In</div>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="form-field-card">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="password" className="password-txt">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password && (
              <span>{formik.errors.password}</span>
            )}

            <br />
          </div>
          <button type="submit" className="sign-btn btn">
            Login
          </button>
        </form>
        <br />

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
