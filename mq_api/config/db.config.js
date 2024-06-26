const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch(e => {
        console.error('Connection error:', e.message);
    });

const db = mongoose.connection;

module.exports = db;
