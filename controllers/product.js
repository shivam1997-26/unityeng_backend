const product = require("../model/product")

const addProduct = async (req, res) => {

    try {
        const productData = new product({
            productName: req.body.productName,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            features: req.body.features,
            image: req.file.filename
        })

        const productItem = await productData.save()
        console.log(productItem)
        res.status(200).json({ message: 'Product add successfully', status: 200, productItem })
    }
    catch (err) {
        console.log(err)
    }
}

const getAllProduct = async (req, res) => {
    try {
        const data = await product.find()
        if (data) {

            const productData = data.map((item) => {
                return {
                    id: item._id,
                    productName: item.productName,
                    shortDescription: item.shortDescription,
                    longDescription: item.longDescription,
                    features: data.features,
                    image: `${req.protocol}://${req.get('host')}/website/${item.image}`
                }
            })
            res.status(200).json({ 'message': 'Product Data fetched successfully', 'status': 200, productData })
        } else {
            res.status(404).json({ 'message': 'Product not Found' })
        }
    } catch (err) {
        console.log(err)
    }
}

const getProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const data = await product.findOne({ _id: productId })

        if (data) {

            const productData = {
                id: data._id,
                productName: data.productName,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                features: data.features,
                image: `${req.protocol}://${req.get('host')}/website/${data.image}`

            }
            res.status(200).json({ 'message': 'Product Data fetched successfully', 'status': 200, productData })
        } else {
            res.status(404).json({ 'message': 'Product not Found' })
        }
    } catch (err) {
        console.log(err)
    }
}

const editProduct = async (req, res) => {
    try {
        
        const { id } = req.params
        const response = await product.findByIdAndUpdate(id, {
            productName: req.body.productName,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            features: req.body.features,
            image: req.file.filename
        }, { new: true })

        res.status(200).json({ message: 'record updated successfully', status: 200, response })

    } catch (err) {
        console.log(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body

        const response = await product.findByIdAndDelete(id)

        if (!response) {
            res.status(400).json({ message: 'record not found' })
        }
        res.status(200).json({ message: 'record deleted successfully', status: 200, response })

    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addProduct, getAllProduct, getProduct, deleteProduct, editProduct

}