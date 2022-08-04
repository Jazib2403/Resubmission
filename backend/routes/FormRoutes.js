const express = require('express')
const router = express.Router()
const {
    getForms,
    createForm
} = require('../controllers/FormController')

router.route('/').get(getForms).post(createForm)

module.exports = router