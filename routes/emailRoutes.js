const express = require('express');
const { sendEmail } = require('../controllers/emailController');

const router = express.Router();

// Route for sending emails
router.post('/send', sendEmail);

module.exports = router;
