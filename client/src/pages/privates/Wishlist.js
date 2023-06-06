import { pay1, pay2, pay3, pay4, pay5, tshirt } from "../../assets";
import { HiShoppingCart } from "react-icons/hi";
import { MyMobileCarousel, MyRatingComponent } from "../../components/Features";
import { BiChevronRight, BiHeart } from "react-icons/bi";
import { motion } from "framer-motion";
const Wishlist = () => {
  return (
    <div className="single-product">
      <div className="container">
        <div className="breadcrumb">Home / Wishlist</div>

        <motion.div
          className="single-product-items"
          initial={{ y: "50vw" }}
          animate={{ y: "0%" }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
        >
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
        </motion.div>

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

export default Wishlist;
