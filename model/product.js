const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    features: {
        type: Array
    },
    image: {
        type: String,
        required: true
    },
    images: [String]
}, {
    timestamps: true
})

module.exports = mongoose.model('product', productSchema)