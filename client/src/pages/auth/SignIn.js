import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginSchema } from "../../utiles/validation";
import { loginUser } from "./../../redux/features/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });


  return (
    <div className="sign-in">
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
