const Dubai = require("./dubai.model");

async function createDubai(req, res) {
  const { name, description } = req.body;
  const dubai_image = req.file ? req.file.location : null;

  try {

      const companyData = { name, description, dubai_image };
      const savedCompany = await Dubai.create(companyData);

      res.status(201).json({
          message: "Deal created successfully",
          category: savedCompany,
      });

  } catch (error) {
      console.error("Error occurred while creating company:", error);
      res.status(500).json({ error: "An internal server error occurred" });
  }

}


const getdubai = async (req, res) => {
  try {
      const dubai = await Dubai.find();
      res.status(200).json(dubai);
      console.log(dubai);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createDubai,
  getdubai,
};
