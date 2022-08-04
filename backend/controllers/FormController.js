// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const asyncHandler = require('express-async-handler')
// const FormUser = require('../models/FormModel')

// @ desc    Register new user
// @ route   POST /api/users
// @access   Public 
// const FormUser = asyncHandler(async (req, res) => {
//     const {Title,body} = req.body

//     if (!Title || !body) {
//         res.status(400)
//         throw new Error('Please add all fields')
//     }

//     //check if user exists
//    // const userExists = await User.findOne({ email })

//     // if (userExists) {
//     //     res.status(400)
//     //     throw new Error('User already exists')
//     // }
// }


const asyncHandler = require('express-async-handler')

const Form = require('../models/FormModel')

// @ desc    GET FORMS
// @ route   GET /api/forms
// @access   Public
const getForms = asyncHandler(async (req, res) => {
    const forms = await Form.find()

    res.status(200).json(forms)
})


// @ desc    CREATE FORM
// @ route   POST /api/forms
// @access   Public
const createForm = asyncHandler(async (req, res) => {
    console.log(req.body)
    
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add some text to the title field')
    }
    
    const form = await Form.create({
        title: req.body.title,
        text: req.body.text
    })
    
    res.status(200).json(form)
});


module.exports = {
    getForms,
    createForm
}