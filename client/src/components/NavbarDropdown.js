import { motion } from "framer-motion";
import React, { useState } from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const SubItemVariants = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const NavDropDown = () => {
  return (
    <div className="navbar-dropdown-container">
      <motion.div className="menu-container">
        <MenuItem text={"Groceries"}>
          <SubItem title="Product" text="A SaaS for e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"Fruits"}>
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem title="The Company" text="Since 1998" />
          <SubItem
            title="Our Mission"
            text="Increase the GDP of the internet"
          />
          <SubItem title="Investors" text="who's backing us" />
        </MenuItem>
        <MenuItem text={"Home & Kitchen"}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
        <MenuItem text={"Fashion"}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
        <MenuItem text={"Elecrtonics"}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
        <MenuItem text={" Beauty"}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
        <MenuItem text={"Sport & Toys"}>
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
      </motion.div>
    </div>
  );
};

const MenuItem = ({ text, children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="menu-item"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="menu-item-text">
        {text}
        {isBeingHovered && (
          <motion.div
            className="underline"
            layoutId="underline"
            layout
          ></motion.div>
        )}
      </span>
      
      {isBeingHovered && (
        <div className="sub-menu">
          <motion.div
            {...props}
            layoutId="menu"
            className="sub-menu-content"
            variants={MenuItemVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};


const SubItem = ({ title, text }) => {
  return (
    <motion.div className="sub-item" layout variants={SubItemVariants}>
      <div className="sub-item-content">
        <Hashicon value={title} size={25} />
        <div className="sub-item-details">
          <p className="title">{title}</p>
          <span className="text">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NavDropDown;