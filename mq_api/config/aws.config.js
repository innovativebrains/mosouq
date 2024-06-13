'use strict';
require('dotenv').config();

const aws = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
  accessKey: process.env.AWS_ACCESS_KEY,
  secretKey: process.env.AWS_SECRET_KEY
};

module.exports = aws;
