import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
    unique: true,
    index: true,
  },
});

const ProductCategory = mongoose.model("ProdcutCategory", productCategorySchema);

export default ProductCategory;
