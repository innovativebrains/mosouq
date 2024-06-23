const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    // Property Type Data
    name: { type: String },
    description: { type: String },

    dubai_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('dubai', companySchema);
