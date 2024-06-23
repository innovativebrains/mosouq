const authRoutes = require("../modules/authentication/user.routes");

const categoryRoutes = require("../modules/category/category.route")

const subCategoryRoute = require("../modules/subcategory/subcategory.route")

const companyRoute = require("../modules/companies/companies.route")

const businessRoute = require("../modules/trending/business.route")

const dealRoute = require("../modules/dubai/dubai.route")

const dubaiRoute = require("../modules/dubai/dubai.route")

module.exports = function router(app) {
  
  app.use("/api/user", authRoutes)

  app.use("/api/category", categoryRoutes)

  app.use("/api/subcategory", subCategoryRoute)

  app.use("/api/company", companyRoute)

  app.use("/api/business", businessRoute)

  app.use("/api/deal", dealRoute)

  app.use("/api/dubai", dubaiRoute)

}; 