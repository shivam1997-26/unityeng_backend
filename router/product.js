const express = require('express')
const { addProduct, getAllProduct, getProduct, deleteProduct, editProduct } = require('../controllers/product')
const upload = require('../middleware/fileupload')

const router = express.Router()

router.post('/add/product', upload.single('image'), addProduct)

router.get('/get/allProductData', getAllProduct)

router.get('/get/Product/:id', getProduct)
router.post('/delete/product', deleteProduct)
router.post('/edit/product/:id',upload.single('image'), editProduct)


module.exports = router