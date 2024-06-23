const Business = require("./business.model");

async function createBusiness(req, res) {
  const { name, type, location, description,consultation } = req.body;
  const business_image = req.file ? req.file.location : null;
  try {
      const categoryData = { name, type, location, description,consultation, business_image };
      const savedCategory = await Business.create(categoryData);
      res.status(201).json({
          message: "Business created successfully",
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
  createBusiness,
  getCategories,
};
