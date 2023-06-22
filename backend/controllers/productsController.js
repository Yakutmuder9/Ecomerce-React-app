import Product from "../models/Product.js";
import User from "../models/User.js";

// Get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find().lean();

  // If no products
  if (!products?.length) {
    return res.status(400).json({ message: "No products found" });
  }

  // Add username to each product before sending the response
  const productsWithUser = await Promise.all(
    products.map(async (product) => {
      const user = await User.findById(product.user).lean().exec();
      return { ...product, username: user.username };
    })
  );

  res.json(productsWithUser);
};

// Create new product
const createNewProduct = async (req, res) => {
  const { user, title, text } = req.body;

  // Confirm data
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title
  const duplicate = await Product.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate product title" });
  }

  const product = await Product.create({ user, title, text });

  if (product) {
    return res.status(201).json({ message: "New product created" });
  } else {
    return res.status(400).json({ message: "Invalid product data received" });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id, user, title, text, completed } = req.body;

  // Confirm data
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm product exists to update
  const product = await Product.findById(id).exec();

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  // Check for duplicate title
  const duplicate = await Product.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow renaming of the original product
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate product title" });
  }

  product.user = user;
  product.title = title;
  product.text = text;
  product.completed = completed;

  const updatedProduct = await product.save();

  res.json(`'${updatedProduct.title}' updated`);
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Product ID required" });
  }

  // Confirm product exists to delete
  const product = await Product.findById(id).exec();

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  const result = await product.deleteOne();
  const reply = `Product '${result.title}' with ID ${result._id} deleted`;
  res.json(reply);
};

export { getAllProducts, createNewProduct, updateProduct, deleteProduct };
