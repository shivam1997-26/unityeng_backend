const mongoose = require('mongoose')

const ContactUs = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('contact', ContactUs)
module.exports = Contact