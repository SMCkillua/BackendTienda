const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Configuración de AWS SDK para Cloudflare R2
const s3 = new AWS.S3({
  endpoint: 'https://<tu-dominio-r2>.r2.cloudflarestorage.com',
  accessKeyId: '<tu-access-key-id>',
  secretAccessKey: '<tu-secret-access-key>',
  signatureVersion: 'v4',
  region: 'auto'
});