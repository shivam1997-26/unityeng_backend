const webDetails = require("../model/webDetails");

const addwebdetail = async (req, res) => {

    try {
        const { contact_number, email_id, address } = req.body
        const website_logo = `${req.files['website_logo'][0].filename}`;
        const website_banner = req.files['website_banner'].map((item) => item.filename)
        const webdetails = new webDetails({
            website_logo,
            website_banner,
            contact_number,
            email_id,
            address
        })
        webdetails.save();
        res.status(201).json(webdetails);

    } catch (err) {
        console.log(err)
    }
}

const getWebDetails = async (req, res) => {
    try {
        const data = await webDetails.findOne()

        const website_banner = data.website_banner.map((item) => {
            return (
                `${req.protocol}://${req.get('host')}/website/${item}`
            )
        })

        const webData = {
            website_logo: `${req.protocol}://${req.get('host')}/website/${data.website_logo}`,
            website_banner: website_banner,
            contact_number: data.contact_number,
            email_id: data.email_id,
            address: data.address,
            id: data._id
        };
        res.status(200).json({ 'message': 'Data fetched successfully', 'status': 200, webData })
    }
    catch (err) {
        console.log(err)
    }
}

const editWebdata = async (req, res) => {
    try {
        const { id } = req.params
        const response = await webDetails.findByIdAndUpdate(id, {
            contact_number: req.body.contact_number,
            address: req.body.address,
            email_id: req.body.email_id,
            website_banner : req.files['website_banner'].map((item) => item.filename),
            website_logo: req.files['website_logo'][0].filename,

        }, { new: true })
       
        res.json(response)


    }
    catch (err) {
        console.log(err)
    }
}
module.exports = { addwebdetail, getWebDetails, editWebdata }