const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
 
    name: { type: String },
    company: { type: String },
    email: { type: String },
    country:{type: String},
    phone: { type: String },
    password: { type: String },
    terms: { type: String }

  },
  { timestamps: true }
);

module.exports = mongoose.model('auth', AuthSchema);
