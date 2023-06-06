import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Layout = () => {
  const [scrolled, setScrolled] = useState(true);
 
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


  return (
    <div className={`Layout ${scrolled ? "scrolled" : ""}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
