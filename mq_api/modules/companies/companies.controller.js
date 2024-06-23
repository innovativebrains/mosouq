const Companies = require("./companies.model");

async function createCompany(req, res) {
  const { link } = req.body;
  const companies_image = req.file ? req.file.location : null;

  try {

      const companyData = { link, companies_image };
      const savedCompany = await Companies.create(companyData);

      res.status(201).json({
          message: "Company created successfully",
          category: savedCompany,
      });

  } catch (error) {
      console.error("Error occurred while creating company:", error);
      res.status(500).json({ error: "An internal server error occurred" });
  }

}


const getCompanies = async (req, res) => {
  try {
      const companies = await Companies.find();
      res.status(200).json(companies);
      console.log(companies);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createCompany,
  getCompanies,
};
