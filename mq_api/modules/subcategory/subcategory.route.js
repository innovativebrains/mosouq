const express = require('express');
const router = express.Router();
const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const multer = require('multer');
const awsConfig = require('../../config/aws.config');

const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: awsConfig.accessKey,
        secretAccessKey: awsConfig.secretKey,
    },
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: awsConfig.bucketName,
        key: function (req, file, cb) {
            cb(null, `subcategory_image/${Date.now().toString()}_${file.originalname}`);
        },
    }),
});

const subCategoryController = require('./category.controller');

router.get('/get-subcategories', subCategoryController.getSubCategories);

router.post('/add-subcategory', upload.single('subcategory_image'), subCategoryController.createSubCategory);


module.exports = router;
