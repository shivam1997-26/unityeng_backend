const express = require('express')
const { addPathmaker, getPathmaker, deletePathMaker, getaPathmaker, editPathMaker } = require('../controllers/ourTeam')
const upload = require('../middleware/fileupload')

const router = express.Router()

router.post('/add/pathmaker', upload.single('image'), addPathmaker)
router.get('/get/pathmaker', getPathmaker)
router.post('/delete/pathMaker', deletePathMaker)
router.get('/getaPathMaker/:id', getaPathmaker)
router.post('/edit/pathMaker/:id',upload.single('image'), editPathMaker)

module.exports = router