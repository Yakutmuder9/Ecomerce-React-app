import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <div className="scroll-container"> */}
        <Outlet />
        <Footer />
      {/* </div> */}
    </>
  );
};

export default Layout;
