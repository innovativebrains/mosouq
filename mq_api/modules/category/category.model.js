const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    // Property Type Data
    name: { type: String },
    category_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('category', propertySchema);
