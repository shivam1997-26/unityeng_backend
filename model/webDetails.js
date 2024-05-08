const mongoose = require('mongoose')

const WebSechema = new mongoose.Schema({
    website_logo: {
        type: String,
    },
    website_banner: {
        type: Array,
    },
    contact_number: {
        type: String,
    },
    email_id: {
        type: String,
    },
    address: {
        type: String,
    },
    pathMaker:{
        type: Array,
    }
}, { timestamps: true })


const webDetails = mongoose.model('webdetail', WebSechema)

module.exports = webDetails

