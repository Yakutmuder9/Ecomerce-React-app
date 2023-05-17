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

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);

router.get("/all-users", getAllUser);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/:id", authMiddleware, isAdmin, getUser);

router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);

router.delete("/clear-cart", authMiddleware, clearCart);
router.delete("/:id", deleteUser);

export default router;
