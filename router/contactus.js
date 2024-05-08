const express = require('express');
const { contactUs, getcontactUs } = require('../controllers/contactUs');


const router = express.Router()

router.post('/add/contact', contactUs);
router.get('/get/contact',getcontactUs)

module.exports = router