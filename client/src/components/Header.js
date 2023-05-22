import { BsCart2, BsChevronDown, BsChevronRight } from "react-icons/bs";
import { MdMenu, MdLocationOn, MdSearch } from "react-icons/md";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaUserAlt,
} from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { f1, f3, grind, logo, mobi, tshirt } from "../assets";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { filterAccordItems } from "../data/data";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openItems, setOpenItems] = useState([]);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  const handleItemClick = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  const toggleAccordion = (itemId) => {
    handleItemClick(itemId);
  };
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
              <span onClick={toggleMenu}>
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
                <a href="account">
                  <FaUserAlt />
                </a>
              </div>
              <div className="nav-cart">
                <a href="cart">
                  <HiShoppingCart />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`navbar-drop-menu ${isNavOpen ? "open" : ""}`}>
          <div className="container">
            <div className="navbar-srh-field">
              <input type="text" placeholder="Search" id="" />
              <MdSearch />
            </div>
            <div className="accordion-container">
              {filterAccordItems.map((item) => {
                const isOpen = openItems.includes(item.id);
                return (
                  <motion.div
                    className="accordion"
                    key={item.id}
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ type: "spring", duration: 3, bounce: 0.3 }}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <p>{item.title}</p>
                      <span className="accordion-icon">
                        {isOpen ? <FaAngleUp /> : <FaAngleRight />}
                      </span>
                    </div>
                    <motion.div
                      className="accordion-content"
                      initial={isOpen ? "open" : "closed"}
                      animate={isOpen ? "open" : "closed"}
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul>
                        {item?.filterList.map((list) => {
                          return (
                            <li>
                              <a href=""> {list}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            <div className="navbar-choose">
              <ul>
                <li>
                  <a href="signin">Sign In</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
                <li>
                  <a href="">Feeds</a>
                </li>
              </ul>
            </div>
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
