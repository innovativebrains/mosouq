const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    // Property Type Data

    category: {type: Number},
    sub_name: { type: String },
    category_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('subcategory', propertySchema);
