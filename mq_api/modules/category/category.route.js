const express = require('express')
const router = express.Router()

const aws = require('aws-sdk')
const multerS3 = require('multer-s3');

const awsConfig = require('../../config/aws.config')

aws.config.update({
    secretAccessKey: awsConfig.secretKey,
    accessKeyId: awsConfig.accessKey,
    region: awsConfig.region
});
 
// Uploads logo to the aws s3
const s3 = new aws.S3();
const multer = require('multer');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.bucketName,
    key: function (req, file, cb) {
      cb(null, `category_image/${Date.now().toString()}_${file.originalname}`);
    }
  })
});


const categoryController =   require('./category.controller');

router.get('/get-categories', categoryController.getCategories);

// Create a new brand
router.post('/add-category', (req, res, next) => {
  upload.single('category_image')(req, res, function (err) {
    if (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ error: 'Failed to upload file to S3' });
    }
    next();
  });
}, categoryController.createCategory);

router.post('/get-categories', categoryController.getCategories)


module.exports = router
