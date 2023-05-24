import { BsChevronUp } from "react-icons/bs";
import { logo, goPlay, AppStore, us } from "../assets";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-cont">
        <div className="container">
          <h2>Subscibe on our newsletter</h2>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="send-email-cont">
            <input type="text" placeholder="Email" className="input" />
            <button >Subscribe</button>
          </div>
        </div>
      </div>

      <div className="foot-link-cont">
        <div className="container">
          <div className="logo-social-links grid-card">
            <a href="/">
              <img src={logo} alt="" />
              <h3>
                <span>Zilla</span>
              </h3>
            </a>
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div className="social-links">
              <div className="fb-link"></div>
              <div className="twitter-link"></div>
              <div className="linked-link"></div>
              <div className="instagram-link"></div>
              <div className="youtube-link"></div>
            </div>
          </div>
           <div className="about-links grid-card">
            <h6>About</h6>
            <ul>
              <li>
                <a href="about">About Us</a>{" "}
              </li>
              <li>
                <a href="#">Find Store</a>{" "}
              </li>
              <li>
                <a href="products">Categories</a>{" "}
              </li>
              <li>
                <a href="blogs">Blogs</a>{" "}
              </li>
            </ul>
          </div>

          <div className="info-links grid-card">
            <h6>Information</h6>
            <ul>
              <li>
                <a href="help">Help Center</a>
              </li>
              <li>
                <a href="refund-policy">Money Refund</a>
              </li>
              <li>
                <a href="shipping-policy">Shipping</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="user-links grid-card">
            <h6>For User</h6>
            <ul>
              <li>
                <a href="signin">Sign in</a>
              </li>
              <li>
                <a href="signup">Register</a>
              </li>
              <li>
                <a href="profile">Setting</a>
              </li>
              <li>
                <a href="">My Orders</a>
              </li>
            </ul>
          </div>
         {/* <div className="get-app grid-card">
            <h6>Get app</h6>
            <ul>
              <li>
                <img src={goPlay} alt="" />
              </li>
              <li>
                <img src={AppStore} alt="" />
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="made-cont">
        <div className="container">
          <div className="made-by">
            <p>© 2023 Ecomm<span>erce</span>. Made by Yakut Ahmedin</p>
          </div>
          <div className="go-top">
            <span><img src={us} alt="" /></span>
            English <BsChevronUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
