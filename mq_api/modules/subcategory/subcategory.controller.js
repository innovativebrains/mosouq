const SubCategory = require("./subcategory.model");

async function createSubCategory(req, res) {
  const { name } = req.body;
  const subcategory_image = req.file ? req.file.location : null;
  try {
      const subCategoryData = { name, subcategory_image };
      const savedCategory = await SubCategory.create(subCategoryData);
      res.status(201).json({
          message: "Sub Category created successfully",
          category: savedCategory,
      });
  } catch (error) {
      console.error("Error occurred while creating category:", error);
      res.status(500).json({ error: "An internal server error occurred" });
  }
}


const getSubCategories = async (req, res) => {
  try {
      const subcategories = await SubCategory.find();
      res.status(200).json(subcategories);
      console.log(subcategories);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createSubCategory,
  getSubCategories,
};
