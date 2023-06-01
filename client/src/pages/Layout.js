import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(true);
  const navigate = useNavigate();
  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/account");
    } else {
      navigate("/signin");
    }
  }, [user, isError, isSuccess, isLoading]);

  console.log("is: ", isSuccess);

  return (
    <div className={`Layout ${scrolled ? "scrolled" : ""}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
