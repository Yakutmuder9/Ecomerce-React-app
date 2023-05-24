import { pay1, pay2, pay3, pay4, pay5, tshirt } from "../assets";
import { HiOutlineArrowNarrowLeft, HiShoppingCart } from "react-icons/hi";
import { MyMobileCarousel, MyRatingComponent } from "../components/Features";
import { BiChevronRight, BiHeart } from "react-icons/bi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="single-product">
      <div className="container">
        <div className="breadcrumb">Home / product / type</div>

        <div className="single-product-items">
          <div className="single-product-img">
            <div className="product-all-side-img">
              <img src={tshirt} alt="" />
              <img src={tshirt} alt="" />
              <img src={tshirt} alt="" />
              <img src={tshirt} alt="" />
            </div>
            <div className="single-side-img">
              <img src={tshirt} alt="" />
            </div>
          </div>

          <div className="single-product-detail">
            <h4 className="">
              T-shirts with multiple colors, for men and lady
              <MyRatingComponent value={5} />
              <h4>$129.99</h4>
            </h4>
            <p>
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
              Textured Stretch Mens Short Sleeve Polo
            </p>
            <div className="single-product-card-btns">
              <button>Remove</button>
              <button>
                {" "}
                <BiHeart /> Save for later
              </button>
            </div>

            <div className="single-product-price">
              <div className="add-tocard-btn">
                <select name="" id="" className="input">
                  <option value="1">Qty:1</option>
                  <option value="2">Qty:2</option>
                  <option value="3">Qty:3</option>
                  <option value="3">Qty:4</option>
                  <option value="3">Qty:5</option>
                </select>
                <button className="btn">
                  <HiShoppingCart /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-container">
          <div className="product-detail-tab">
            <div className="tab-buttons">
              <motion.button
                className={activeTab === 0 ? "active" : ""}
                onClick={() => handleTabClick(0)}
              >
                Description
              </motion.button>
              <motion.button
                className={activeTab === 1 ? "active" : ""}
                onClick={() => handleTabClick(1)}
              >
                Reviews
              </motion.button>
              <motion.button
                className={activeTab === 2 ? "active" : ""}
                onClick={() => handleTabClick(2)}
              >
                Shipping
              </motion.button>
              <motion.button
                className={activeTab === 3 ? "active" : ""}
                onClick={() => handleTabClick(3)}
              >
                About company
              </motion.button>
            </div>

            <div className="tab-content">
              {activeTab === 0 && (
                <>
                  <motion.p
                    initial={{ y: "50vw" }}
                    animate={{ y: activeTab === 0 ? "0%" : "-50%" }}
                    transition={{ duration: 0.3 }}
                  >
                    Description Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, Quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </motion.p>
                  <ul>
                    <motion.li
                      initial={{ y: "50%" }}
                      animate={{ y: activeTab === 0 ? "0%" : "-50%" }}
                      transition={{ duration: 0.3 }}
                    >
                      Some great feature name here
                    </motion.li>
                    <motion.li
                      initial={{ x: "-50vw" }}
                      animate={{ x: activeTab === 0 ? "0%" : "50vw" }}
                      transition={{ duration: 0.3 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur{" "}
                    </motion.li>
                    <motion.li
                      initial={{ x: "-50vw" }}
                      animate={{ x: activeTab === 0 ? "0%" : "50vw" }}
                      transition={{ duration: 0.4 }}
                    >
                      Duis aute irure dolor in reprehenderit
                    </motion.li>
                    <motion.li
                      initial={{ x: "-50%" }}
                      animate={{ x: activeTab === 0 ? "0%" : "50vw" }}
                      transition={{ duration: 0.5 }}
                    >
                      dolor sit amet, consectetur
                    </motion.li>
                    <motion.li
                      initial={{ x: "-50%" }}
                      animate={{ x: activeTab === 0 ? "0%" : "50vw" }}
                      transition={{ duration: 0.6 }}
                    >
                      Duis aute irure dolor in reprehenderit
                    </motion.li>
                  </ul>
                </>
              )}
              {activeTab === 1 && (
                <motion.p
                  initial={{ y: "50%" }}
                  animate={{ y: activeTab === 1 ? "0%" : "-50%" }}
                  transition={{ duration: 0.3 }}
                >
                  Reviews Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, Quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </motion.p>
              )}
              {activeTab === 2 && (
                <motion.p
                  initial={{ y: "50%" }}
                  animate={{ y: activeTab === 2 ? "0%" : "-50%" }}
                  transition={{ duration: 0.3 }}
                >
                  Shipping Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, Quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </motion.p>
              )}
              {activeTab === 3 && (
                <motion.p
                  initial={{ y: "50%" }}
                  animate={{ y: activeTab === 3 ? "0%" : "-50%" }}
                  transition={{ duration: 0.3 }}
                >
                  About company Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, Quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.{" "}
                </motion.p>
              )}
            </div>
          </div>

          <div className="you-may-like">
            <h4 className="releted-title">You may like</h4>
            <div className="may-like-card">
              <img src={tshirt} alt="" />
              <div className="detail">
                <p className="detail-title">Apple Watch Series Space Gray</p>
                <MyRatingComponent />
                <div className="price">$7.00 - $99.50</div>
              </div>
            </div>
            <div className="may-like-card">
              <img src={tshirt} alt="" />
              <div className="detail">
                <p className="detail-title">Apple Watch Series Space Gray</p>
                <MyRatingComponent />
                <div className="price">$7.00 - $99.50</div>
              </div>
            </div>

            <div className="may-like-card">
              <img src={tshirt} alt="" />
              <div className="detail">
                <p className="detail-title">Apple Watch Series Space Gray</p>
                <MyRatingComponent />
                <div className="price">$7.00 - $99.50</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-row" id="mobile-category">
          <div className="container">
            <div className="header">
              <h4>
                Recommended <span>Products </span>
              </h4>
              <a href="">
                <button>
                  View All <BiChevronRight />
                </button>
              </a>
              <div className="header-txt-border"></div>
            </div>

            <div className="card-carousel">
              <MyMobileCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
