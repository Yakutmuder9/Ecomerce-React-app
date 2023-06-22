import express from "express";
import verifyJWT from "../middleware/verifyJWT.js";
import {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();
router.use(verifyJWT);

router
  .route("/")
  .get(getAllProducts)
  .post(createNewProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
