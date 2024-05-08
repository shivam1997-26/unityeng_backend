const express = require('express')
const { addwebdetail, getWebDetails, editWebdata } = require('../controllers/webDetail')
const upload = require('../middleware/fileupload')

const router = express.Router()

router.post('/add/webdetails',upload.fields([
    { name: 'website_logo', maxCount: 1 },
    { name: 'website_banner' }
]),addwebdetail)

router.get('/get/webDetails',getWebDetails)

router.post('/edit/webdata/:id',upload.fields([
    { name: 'website_logo',maxCount: 1},
    { name: 'website_banner' }
]),editWebdata)

module.exports = router