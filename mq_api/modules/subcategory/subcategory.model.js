const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subcategorySchema = new Schema(
  {
    // Property Type Data

    category: {type: String},
    sub_name: { type: String },
    subcategory_image: { type: String },


  },
  { timestamps: true }
);

module.exports = mongoose.model('subcategory', subcategorySchema);
