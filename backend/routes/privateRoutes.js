import express from "express";
import {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} from "../controllers/product.js";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} from "../controllers/productCategory.js";
import {
  createInquiry,
  updateInquiry,
  deleteInquiry,
  getInquiry,
  getallInquiry,
} from "../controllers/inquiry.js";
import {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} from "../controllers/coupon.js";
import {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} from "../controllers/color.js";
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
} from "../controllers/brand.js";
import {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getAllBlogCategory,
} from "../controllers/blogCategory.js";
import {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadBlogImages,
} from "../controllers/blog.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import { uploadImages, deleteImages } from "../controllers/upload.js";
import {
  uploadPhoto,
  productImgResize,
  blogImgResize,
} from "../utils/uploadImage.js";

const router = express.Router();

// Product Routes
router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/rating", authMiddleware, rating);

// Product Category Routes
router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", getCategory);
router.get("/", getallCategory);

// Inquiry Inq Route
router.post("/", createInquiry);
router.put("/:id", authMiddleware, isAdmin, updateInquiry);
router.delete("/:id", authMiddleware, isAdmin, deleteInquiry);
router.get("/:id", getInquiry);
router.get("/", getallInquiry);

// Coupon Route
router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupons);
router.get("/:id", authMiddleware, isAdmin, getAllCoupons);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

// Color Route
router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);

// Brand Routes
router.post("/", authMiddleware, isAdmin, createBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

// Blog Category Routes
router.post("/", authMiddleware, isAdmin, createBlogCategory);
router.put("/:id", authMiddleware, isAdmin, updateBlogCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory);
router.get("/:id", getBlogCategory);
router.get("/", getAllBlogCategory);

// Blog Routes
router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadBlogImages
);

// Upload Routes
router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

export default router;
