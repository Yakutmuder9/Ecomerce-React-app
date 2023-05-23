import "./styles/main.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  SignUp,
  SignIn,
  ForgotPassword,
  ResetPassword,
  Layout,
  Home,
  About,
  Contact,
  Wishlist,
  Cart,
  Profile,
  Checkout,
  Product,
  SingleProduct,
  Blog,
  SignleBlog,
  CompareProduct,
  TearmCondition,
  PrivacyPolicy,
  ShippingPolicy,
  RefundPolicy,
  PageNotFound,
} from "./pages/index";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Checkout />} />
          <Route path="/payment" element={<Checkout />} />

          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<SignleBlog />} />
          <Route path="/compare-prodcut" element={<CompareProduct />} />

          <Route path="/term-conditions" element={<TearmCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
