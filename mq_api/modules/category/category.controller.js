const Category = require("./category.model");
const mongoose = require("mongoose");

async function createCategory(req, res) {
  const { name } = req.body;
  const category_image = req.file ? req.file.location : null;

  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);

  try {
      const categoryData = { name, category_image };
      const savedCategory = await Category.create(categoryData);
      res.status(201).json({
          message: "Category created successfully",
          category: savedCategory,
      });
  } catch (error) {
      console.error("Error occurred while creating category:", error);
      res.status(500).json({ error: "An internal server error occurred" });
  }
}


const getCategories = async (req, res) => {
  try {
      const categories = await Category.find();
      res.status(200).json(categories);
      console.log(categories);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
