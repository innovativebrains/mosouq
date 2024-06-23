const db = require('./config/db.config')
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();
const router = express.Router({ strict: true });

const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

app.use(cors(corsOptions));

// API Port Here
const apiPort = process.env.PORT;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/", router);
require("./routes/routes")(app);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
