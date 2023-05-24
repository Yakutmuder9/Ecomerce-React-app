import React, { useState } from "react";
import { motion } from "framer-motion";

const statusStep = [
  { id: 1, title: "Shopping" },
  { id: 2, title: "Cart" },
  { id: 3, title: "Paid" },
  { id: 4, title: "Shipped" },
  { id: 5, title: "In Transit" },
  { id: 6, title: "Delivered" },
];
const CheckoutTracker = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const generateConnectionLines = () => {
    const lines = [];
    if (activeStep >= 2) {
      lines.push(
        <motion.div
          key="shopping-paid"
          className={`line ${activeStep >= 3 ? "active" : ""}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      );
    }
    if (activeStep >= 4) {
      lines.push(
        <motion.div
          key="paid-shipped"
          className={`line ${activeStep >= 5 ? "active" : ""}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      );
    }
    return lines;
  };

  return (
    <div className="checkout-tracker">
      {generateConnectionLines()}
      <motion.div
        className={`step ${activeStep >= 1 ? "active" : ""}`}
        onClick={() => handleStepClick(1)}
      >
        <div className="step-number">1</div>
        <div className="step-label">Shopping</div>
      </motion.div>
      <motion.div
        className={`step ${activeStep >= 2 ? "active" : ""}`}
        onClick={() => handleStepClick(2)}
      >
        <div className="step-number">2</div>
        <div className="step-label">Cart</div>
      </motion.div>
      <motion.div
        className={`step ${activeStep >= 3 ? "active" : ""}`}
        onClick={() => handleStepClick(3)}
      >
        <div className="step-number">3</div>
        <div className="step-label">Paid</div>
      </motion.div>
      <motion.div
        className={`step ${activeStep >= 4 ? "active" : ""}`}
        onClick={() => handleStepClick(4)}
      >
        <div className="step-number">4</div>
        <div className="step-label">Shipped</div>
      </motion.div>
      <motion.div
        className={`step ${activeStep >= 5 ? "active" : ""}`}
        onClick={() => handleStepClick(5)}
      >
        <div className="step-number">5</div>
        <div className="step-label">In Transit</div>
      </motion.div>
      <motion.div
        className={`step ${activeStep >= 6 ? "active" : ""}`}
        onClick={() => handleStepClick(6)}
      >
        <div className="step-number">6</div>
        <div className="step-label">Delivered</div>
      </motion.div>
    </div>
  );
};

export default CheckoutTracker;
