const SubCategory = require("./subcategory.model");

async function createSubCategory(req, res) {
  const { category, sub_name } = req.body;
  const subcategory_image = req.file ? req.file.location : null;
  try {
      const subCategoryData = { category, sub_name, subcategory_image };
      const savedSubCategory = await SubCategory.create(subCategoryData);
      res.status(201).json({
          message: "Sub Category created successfully",
          subCategory: savedSubCategory,
      });
  } catch (error) {
      console.error("Error occurred while creating Sub category:", error);
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
