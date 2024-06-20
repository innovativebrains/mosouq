const authRoutes = require("../modules/authentication/user.routes");

const categoryRoutes = require("../modules/category/category.route")

const subCategoryRoute = require("../modules/subcategory/subcategory.route")

module.exports = function router(app) {
  
  app.use("/api/user", authRoutes)

  app.use("/api/category", categoryRoutes)

  app.use("/api/subcategory", subCategoryRoute)

}; 