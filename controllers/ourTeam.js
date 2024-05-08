const ourTeam = require("../model/ourTeam")

const addPathmaker = async (req, res) => {
    try {

        const pathMaker = new ourTeam({
            fullName: req.body.fullName,
            designation: req.body.designation,
            description: req.body.description,
            image: req.file.filename

        })

        const teamData = await pathMaker.save()
        res.status(200).json({ message: 'Data inserted Successfully', status: 200, teamData })
    }
    catch (err) {
        console.log(err)
    }
}


const editPathMaker = async (req, res) => {
    try {
        const id = req.params.id
        const result = await ourTeam.findByIdAndUpdate(id, {
            fullName: req.body.fullName,
            designation: req.body.designation,
            description: req.body.description,
            image: req.file.filename
        }, { new: true })

        res.status(200).json({ message: 'Record updated successfully', result })
    } catch (err) {
        console.log(err)
    }
}

const getPathmaker = async (req, res) => {
    try {
        const result = await ourTeam.find()

        const resultData = result.map((data) => {
            return {
                id: data._id,
                fullName: data.fullName,
                designation: data.designation,
                description: data.description,
                image: `${req.protocol}://${req.get('host')}/website/${data.image}`
            }
        })
        res.status(200).json({ message: "Data fetched successfully", status: 200, resultData })
    } catch (err) {
        console.log(err)
    }
}

const getaPathmaker = async (req, res) => {
    try {
        const id = req.params.id
        const result = await ourTeam.findOne({ _id: id })

        const resultData = {
            id: result._id,
            fullName: result.fullName,
            designation: result.designation,
            description: result.description,
            image: `${req.protocol}://${req.get('host')}/website/${result.image}`
        }
        res.status(200).json({ message: "Data fetched successfully", status: 200, resultData })
    } catch (err) {
        console.log(err)
    }
}

const deletePathMaker = async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.body
        const result = await ourTeam.findByIdAndDelete(id)
        if (!result) {
            res.status(404).json({ message: 'record not found' })
        }
        res.status(200).json({ message: 'Record Deleted Successfully' })
    } catch (err) {
        console.log(err)
    }
}
module.exports = { addPathmaker, getPathmaker, deletePathMaker, getaPathmaker,editPathMaker }