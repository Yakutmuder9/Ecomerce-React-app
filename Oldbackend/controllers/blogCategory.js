import BlogCategory from "../models/blogCategory.js";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateDBId.js";

const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await BlogCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const updateBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await BlogCategory.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const getBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await BlogCategory.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllBlogCategory = asyncHandler(async (req, res) => {
  try {
    const getallCategory = await BlogCategory.find();
    res.json(getallCategory);
  } catch (error) {
    throw new Error(error);
  }
});
export {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getAllBlogCategory,
};
