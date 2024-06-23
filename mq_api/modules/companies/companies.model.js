const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    // Property Type Data
    link: { type: String },
    companies_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('company', companySchema);
