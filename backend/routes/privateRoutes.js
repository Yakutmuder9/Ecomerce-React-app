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
router.post("/product", authMiddleware, isAdmin, createProduct);
router.get("/product/:id", getaProduct);
router.get("/product", getAllProduct);
router.put("/product/:id", authMiddleware, isAdmin, updateProduct);
router.put("/product/wishlist", authMiddleware, addToWishlist);
router.delete("/product/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/product/rating", authMiddleware, rating);

// Product Category Routes
router.post("/product-cat", authMiddleware, isAdmin, createCategory);
router.put("/product-cat/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/product-cat/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/product-cat/:id", getCategory);
router.get("/product-cat", getallCategory);

// Inquiry Inq Route
router.post("/inquiry", createInquiry);
router.put("/inquiry/:id", authMiddleware, isAdmin, updateInquiry);
router.delete("/inquiry/:id", authMiddleware, isAdmin, deleteInquiry);
router.get("/inquiry/:id", getInquiry);
router.get("/inquiry", getallInquiry);

// Coupon Route
router.post("/coupon", authMiddleware, isAdmin, createCoupon);
router.get("/coupon", authMiddleware, isAdmin, getAllCoupons);
router.get("/coupon/:id", authMiddleware, isAdmin, getAllCoupons);
router.put("/coupon/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/coupon/:id", authMiddleware, isAdmin, deleteCoupon);

// Color Route
router.post("/color", authMiddleware, isAdmin, createColor);
router.put("/color/:id", authMiddleware, isAdmin, updateColor);
router.delete("/color/:id", authMiddleware, isAdmin, deleteColor);
router.get("/color/:id", getColor);
router.get("/color/", getallColor);

// Brand Routes
router.post("/brand", authMiddleware, isAdmin, createBrand);
router.put("/brand/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/brand/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/brand/:id", getBrand);
router.get("/brand", getallBrand);

// Blog Category Routes
router.post("/blog-category", authMiddleware, isAdmin, createBlogCategory);
router.put("/blog-category/:id", authMiddleware, isAdmin, updateBlogCategory);
router.delete(
  "/blog-category/:id",
  authMiddleware,
  isAdmin,
  deleteBlogCategory
);
router.get("/blog-category/:id", getBlogCategory);
router.get("/blog-category", getAllBlogCategory);

// Blog Routes
router.post("/blog", authMiddleware, isAdmin, createBlog);
router.put("/blog/likes", authMiddleware, liketheBlog);
router.put("/blog/dislikes", authMiddleware, disliketheBlog);
router.put("/blog/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/blog/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/blog/:id", getBlog);
router.get("/blog", getAllBlogs);
router.put(
  "/upload-img/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadBlogImages
);

// Upload Routes
router.post(
  "/upload-img",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

export default router;
