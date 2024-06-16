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
      cb(null, `subcategory_image/${Date.now().toString()}_${file.originalname}`);
    }
  })
});


const subCategoryController =   require('./subcategory.controller');

router.get('/get-subcategories', subCategoryController.getSubCategories);

// Create a new 
router.post('/add-subcategory', subCategoryController.createSubCategory)


module.exports = router
