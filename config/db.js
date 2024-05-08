const mongoose = require('mongoose')

const conn = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://Shivam:Shivam123456@cluster0.grtex9v.mongodb.net/unityeng?retryWrites=true&w=majority')
       
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = conn