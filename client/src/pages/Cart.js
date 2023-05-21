import { tshirt } from "../assets";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="header">header</div>
      <div className="container">
        <h3 className="header">My Cart (2)</h3>
        <div className="cart-product-container">
          <div className="cart-items">
            <div className="cart-card">
              <div className="cart-img">
                <img src={tshirt} alt="" />
              </div>
              <div className="cart-detail">
                <h4 className="">
                  T-shirts with multiple colors, for men and lady
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
              <div className="cart-price">
                <h4>$129.99</h4>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
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
              <div className="checkout-form">
                <div className="checkout-subtotal-cont">
                  <p>Subtotal:</p>
                  <p>$1403.97</p>
                </div>
                <div className="checkout-discount-cont">
                  <p>Discount:</p>
                  <p>$13.97</p>
                </div>
                <div className="checkout-tax-cont">
                  <p>Tax:</p>
                  <p>$15.97</p>
                </div>
                <div className="checkout-total-cont">
                  <h6>Tax:</h6>
                  <h6>$1433.97</h6>
                </div>
                <div className="checkout-btn-cont">
                  <button>Checkout</button>
                </div>
                <div className="checkout-card-type-cont">
                  <img src={tshirt} alt="" />
                </div>
              </div>
            </div>
            <div className="return-rm-cont">
              <button>Back to shop</button>
              <button>Remove all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
