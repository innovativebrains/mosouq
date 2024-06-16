const SubCategory = require("./subcategory.model");
const mongoose = require("mongoose");

async function createSubCategory(req, res) {
    const { sub_name } = req.body;
    const subcategory_image = req.file ? req.file.location : null; 
  
    try {
      const subCategoryData = { sub_name, subcategory_image };
      const savedCategory = await SubCategory.create(subCategoryData);
      res.status(201).json({
        message: "Category created successfully",
        subCategory: savedCategory,
      });
    } catch (error) {
      console.error("Error occurred while creating category:", error);
      res.status(500).json({ error: "An internal server error occurred" });
    }
}

const getSubCategories = async (req, res) => {
  try {
      const categories = await Category.find();
      res.status(200).json(categories);
      console.log(categories);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
    createSubCategory,
  getSubCategories,
};
