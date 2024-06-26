const Deals = require("./deals.model");

async function createDeal(req, res) {
  const { name, type, location, description, consultation } = req.body;
  const business_image = req.file ? req.file.location : null;

  try {

      const businessData = { name, type, location, description, consultation,  business_image };
      const savedBusinses = await Deals.create(businessData);

      res.status(201).json({
          message: "Deal created successfully",
          deal: savedBusinses,
      });

  } catch (error) {
      console.error("Error occurred while creating company:", error);
      res.status(500).json({ error: "An internal server error occurred" });
  }

}


const getdeals = async (req, res) => {
  try {
      const deals = await Deals.find();
      res.status(200).json(deals);
      console.log(deals);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createDeal,
  getdeals,
};
