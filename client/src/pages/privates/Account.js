import { motion } from "framer-motion";
import { Hashicon } from "@emeraldpay/hashicon-react";

const Account = () => {
  return (
    <div className="account-container">
      <div className="container">
        <div className="breadcrumb">Home / My Account</div>
        <div className="header">
          <h1>Your Account</h1>
        </div>

        <ul>
          <motion.li
            initial={{ x: "-50vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          >
            <a href="/orders">
              <div className="avatar">
                <Hashicon value="Your Orders" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Order</div>
                <div className="row">
                  Track, return, cancel an order, download invoice or buy again
                </div>
              </div>
            </a>
          </motion.li>
          <motion.li
            initial={{ y: "50vw" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <a href="/profile">
              <div className="avatar">
                <Hashicon value="Your profile" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Profile</div>
                <div className="row">Edit Your Address or change default</div>
              </div>
            </a>
          </motion.li>
          <motion.li
            initial={{ x: "50vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          >
            <a href="">
              <div className="avatar">
                <Hashicon value="Your Address" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Address</div>
                <div className="row">Edit, remove or set default address</div>
              </div>
            </a>
          </motion.li>

          <motion.li
            initial={{ y: "50vw" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <a href="">
              <div className="avatar">
                <Hashicon value="your password" size={40} />
              </div>

              <div className="content">
                <div className="head">Manage Your Password</div>
                <div className="row">
                  Change password, email and mobile number
                </div>
              </div>
            </a>
          </motion.li>
          <motion.li
            initial={{ y: "50vw" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <a href="/wishlist">
              <div className="avatar">
                <Hashicon value="your wishlist" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Wishlist</div>
                <div className="row">
                  View your saved Wish List items and update
                </div>
              </div>
            </a>
          </motion.li>
          <motion.li
            initial={{ y: "50vw" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <a href="/payment">
              <div className="avatar">
                <Hashicon value="your payment" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Payment</div>
                <div className="row">
                  View your saved Wish List items and update
                </div>
              </div>
            </a>
          </motion.li>

          <motion.li
            initial={{ y: "50vw" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <a href="/message">
              <div className="avatar">
                <Hashicon value="your Message" size={40} />
              </div>

              <div className="content">
                <div className="head">Your Messages</div>
                <div className="row">View Your messages form Zilla</div>
              </div>
            </a>
          </motion.li>
          <motion.li
            initial={{ x: "50vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.6 }}
          >
            <a href="/contact">
              <div className="avatar">
                <Hashicon value="Customer Service" size={40} />
              </div>

              <div className="content">
                <div className="head">Customer Service</div>
                <div className="row">
                  Track, return, cancel an order, download invoice or buy again
                </div>
              </div>
            </a>
          </motion.li>

        </ul>
      </div>
    </div>
  );
};

export default Account;
