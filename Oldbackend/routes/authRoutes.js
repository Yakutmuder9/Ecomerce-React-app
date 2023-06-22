import express from "express";
import {
  createUser,
  loginUser,
  getAllUser,
  getUser,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPassword,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  clearCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
} from "../controllers/user.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Auth Route
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/admin-login", loginAdmin);
router.get("/refresh",  handleRefreshToken);
router.put("/reset-password/:token", resetPassword);
router.put("/update-password", authMiddleware, updatePassword);
router.post("/logout", logout);

// User Route
router.get("/all-users", authMiddleware, isAdmin, getAllUser);
router.get("/get-user/:id", authMiddleware, isAdmin, getUser);
router.put("/edit-user/:id", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.delete("/delete/:id", authMiddleware, deleteUser);

// Cart Route
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/clear-cart", authMiddleware, clearCart);
router.get("/wishlist", authMiddleware, getWishlist);

// Order Route
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.post("/get-order/:id", authMiddleware, isAdmin, getAllOrders);
router.get("/get-orders", authMiddleware, getOrders);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);


export default router;
