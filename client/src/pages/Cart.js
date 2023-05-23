import { pay1, pay2, pay3, pay4, pay5, tshirt } from "../assets";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MyMobileCarousel, MyRatingComponent } from "../components/Features";
import { BiChevronRight } from "react-icons/bi";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="container">
        <h3 className="header">My Cart (2)</h3>

        <div className="cart-product-container">
          <div className="cart-item-cont">
            <div className="cart-items">
              <div className="cart-card">
                <div className="cart-content">
                  <div className="cart-img">
                    <img src={tshirt} alt="" />
                  </div>

                  <div className="cart-detail">
                    <h4 className="">
                      T-shirts with multiple colors, for men and lady
                      <MyRatingComponent value={5} />
                    </h4>
                    <p>
                      Size: medium, Color: blue, Material: Plastic Seller: Artel
                      Market
                    </p>
                    <div className="cart-card-btns">
                      <button>Remove</button>
                      <button>Save for later</button>
                    </div>
                  </div>
                </div>
                <div className="cart-price">
                  <h4>$129.99</h4>
                  <select name="" id="">
                    <option value="1">Qty:1</option>
                    <option value="2">Qty:2</option>
                    <option value="3">Qty:3</option>
                    <option value="3">Qty:4</option>
                    <option value="3">Qty:5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="return-rm-cont">
              <button>
                <HiOutlineArrowNarrowLeft /> Back to shop
              </button>
              <button>Remove all</button>
            </div>
          </div>

          <div className="cart-checkout">
            <div className="checkout-coupon-form">
              <p className="coupon-title">Have a coupon?</p>
              <div className="coupon-filed">
                <input type="text" placeholder="Add coupon" />
                <button>Apply</button>
              </div>
            </div>

            <div className="checkout-payment-form">
              <ul>
                <li>
                  <p>Subtotal:</p>
                  <p>$1403.97</p>
                </li>
                <li>
                  <p>Discount:</p>
                  <p>$13.97</p>
                </li>
                <li>
                  <p>Tax:</p>
                  <p>$15.97</p>
                </li>
                <li className="total">
                  <p>Total:</p>
                  <p>$1433.97</p>
                </li>
                <li>
                  <button>Checkout</button>
                </li>
                <li>
                  <img src={pay1} alt="" />
                  <img src={pay2} alt="" />
                  <img src={pay3} alt="" />
                  <img src={pay4} alt="" />
                  <img src={pay5} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carousel-row" id="mobile-category">
          <div className="container">
            <div className="header">
              <h4>
                Realated Producs <span>smart phones</span>
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

export default Cart;
