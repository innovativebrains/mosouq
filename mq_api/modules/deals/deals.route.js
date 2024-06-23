require('dotenv').config();

const express = require('express');
const router = express.Router();
const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const multer = require('multer');
const awsConfig = require('../../config/aws.config');

const s3 = new S3Client({
    region: awsConfig.region,
    credentials: {
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretAccessKey,
    },
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: awsConfig.bucketName, // Ensure this is correctly set
        key: function (req, file, cb) {
            cb(null, `deal_image/${Date.now().toString()}_${file.originalname}`);
        },
    }),
});

const companyController = require('');

router.get('/get-deals', companyController.getdeals);

router.post('/add-deal', upload.single('deal_image'), companyController.createDeal);

module.exports = router;
