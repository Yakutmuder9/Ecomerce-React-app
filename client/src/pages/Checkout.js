import { bag, cam, watch } from "../assets";
import CheckoutTracker from "../components/StatusTracker";
import { BsShieldLockFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="cheackout">
      <div className="container">
        <div className="breadcrumb">Home / cheackout</div>
        <div className="cheackout-status">
          <CheckoutTracker />
        </div>

        <div className="header">
          <small>01</small>
          <h2>Shipping details</h2>
        </div>

        <div className="checkout-detail-container">
          <div className="shopping-container">
            <div className="address">
              <div className="address-title">
                <div className="head">
                  Address v1 <small>Default</small>
                </div>
                <p>123 Main Street, Maryland(MD) 04852</p>
              </div>
              <div className="address-edit">
                <button>Edit</button>
              </div>
            </div>
            <div className="address">
              <div className="address-title">
                <div className="head">Address v2</div>
                <p>123 Main Street, Maryland(MD) 04852</p>
              </div>
              <div className="address-edit">
                <button>Edit</button>
              </div>
            </div>
            <div className="address">
              <div className="address-title">
                <div className="head">Address v3</div>
                <p>123 Main Street, Maryland(MD) 04852</p>
              </div>
              <div className="address-edit">
                <button>Edit</button>
              </div>
            </div>

            <button className="new-address">
              <span>+</span> Add New Address
            </button>
            <div className="payment-detail">
              <small>02</small>
              <h2>Payment details</h2>

              <div className="bank-type">
                <button disabled>Bank transfer</button>
                <button disabled>Bank transfer</button>
                <button>Credit card or debit card</button>
              </div>

              <div className="card-num-filed">
                <div className="card-num">
                  <p>Card number</p>
                  <input
                    type="number"
                    placeholder="**** **** **** ****"
                    className="card-num-input"
                  />
                </div>
                <div className="card-num">
                  <p>Expiry date</p>
                  <input type="number" placeholder="01/23" />
                </div>
                <div className="card-num">
                  <p>CCV/CVV</p>
                  <input type="number" placeholder="123" />
                </div>
              </div>
              <p className="secured">
                <BsShieldLockFill /> Your transaction is secured with ssl
                ecryption
              </p>
            </div>
          </div>

          <div className="checkout-item-list">
            <p className="header">You Order</p>
            <div className="chekout-item">
              <img src={bag} alt="" />
              <div className="content">
                <p>Item title goese here</p>
                <div className="price-count">
                  <p>$123.99</p>
                  <div className="count-control">
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="chekout-item">
              <img src={cam} alt="" />
              <div className="content">
                <p>Item title goese here</p>
                <div className="price-count">
                  <p>$123.99</p>
                  <div className="count-control">
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="chekout-item">
              <img src={watch} alt="" />
              <div className="content">
                <p>Item title goese here</p>
                <div className="price-count">
                  <p>$123.99</p>
                  <div className="count-control">
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon">
              <input type="text" placeholder="Gift or Promo card"/>
              <button className="btn">Apply</button>
            </div>
            <div className="gift-card">
              <h4>$12 gif card</h4>
              <p>
                Full amount of $12 applied and if you use it now, it will
                expire. There's no cash back
              </p>
              <button>x Remove</button>
            </div>
            <div className="total-price">
              <ul>
                <li>
                  Subtotal <span>$434</span>
                </li>
                <li>
                  Shipping costs <span className="sp-red">$26.99</span>
                </li>
                <li>
                  Taxes <span className="sp-red">$12.4</span>
                </li>
                <li>
                  Gift card <span className="sp-green">+$15.99</span>
                </li>
                <li>
                  Discount(70%) <span className="sp-green">$10.67</span>
                </li>
                <li>
                  Total <span>$431.83</span>
                </li>
              </ul>
              <button>Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
