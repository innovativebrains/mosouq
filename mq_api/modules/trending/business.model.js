const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    // Property Type Data
    name: { type: String },
    type: { type: String },
    location: { type: String },
    description: { type: String },
    consultation: { type: String },
    business_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('business', propertySchema);
