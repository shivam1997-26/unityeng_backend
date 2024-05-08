const mongoose = require('mongoose')
const Contact = require('../model/contactus')

const contactUs = async (req, res) => {
    try {
        const { fullName, email, contactNumber, description } = req.body

        const contactData = new Contact({
            fullName,
            email,
            contactNumber,
            description
        })

        const contact = await contactData.save()

        res.status(200).json({ 'message': 'Record insert Successfully', contact })
    } catch (err) {
        console.log(err)
    }
}

const getcontactUs = async (req, res) => {
    try {
        const response = await Contact.find({})

        res.status(200).json({ 'message': 'Record fetched Successfully', response })
    } catch (err) {
        console.log(err)
    }
}
module.exports = { contactUs, getcontactUs }