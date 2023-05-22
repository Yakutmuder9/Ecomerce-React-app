import { BsCart2, BsChevronDown } from "react-icons/bs";
import { MdMenu, MdLocationOn, MdSearch } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { f1, f3, grind, logo, mobi, tshirt } from "../assets";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);
  return (
    <>
      <div className="md-screen-notice">
        <p>Every Day Deal FREE SHIPPING on orders $50+</p>
      </div>

      <header>
        <div className="main-nav-cont">
          <div className="container">
            <div className="left-nav">
              <p>Every Day Deal FREE SHIPPING on orders $50+</p>
            </div>

            <div className="md-toggle-search">
              <div
                className={`navbar-toggle ${isNavOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <span>
                <MdSearch />
              </span>
            </div>

            <div className="md-logo-container ">
              <a href="/">
                <img src={logo} alt="" />
                <h3>
                  <span>Zilla</span>
                </h3>
              </a>
            </div>

            <div className="right-nav">
              <div className="search-filed">
                <div className="search-input">
                  <select className="custom-select">
                    <option value="All">All </option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>

                  <input type="text" className="" placeholder="Search" />
                  <button className="search-icon">
                    <MdSearch />
                  </button>
                </div>
              </div>

              <div className="location">
                <MdLocationOn /> US <BsChevronDown />
              </div>
              <div className="user-profile">
                <FaUserAlt />
              </div>
              <div className="nav-cart">
                <HiShoppingCart />
              </div>
            </div>
          </div>
        </div>

        <div className={`navbar-drop-menu ${isNavOpen ? "open" : ""}`}>
          <div className="container">
            <ul>
              <li className="navbar-item">
                <input type="text" placeholder="Search" id="" />
                <MdSearch />
              </li>
              <li className="navbar-item">About</li>
              <li className="navbar-item">Services</li>
              <li className="navbar-item">Contact</li>
            </ul>
          </div>
        </div>
      </header>

      <div className="filter-nav">
        <div className="container">
          <div className="logo-container ">
            <a href="/">
              <img src={logo} alt="" />
              <h3>
                <span>Zilla</span>
              </h3>
            </a>
          </div>

          <div className="filter-list">
            <ul>
              <li>
                <img src={f1} alt="" />
                <span>
                  Groceries <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={f3} alt="" />
                <span>
                  Fruits <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={grind} alt="" />
                <span>
                  Home & Kitchen <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={tshirt} alt="" />
                <span>
                  Fashion <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={mobi} alt="" />
                <span>
                  Elecrtonics <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={logo} alt="" />
                <span>
                  Beauty <BsChevronDown />
                </span>
              </li>
              <li>
                <img src={logo} alt="" />
                <span>
                  Sport & Toys <BsChevronDown />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
