const mongoose = require('mongoose')

const FormSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a Title'],
            unique: false
        },
        text: {
            type: String,
            required: [true, 'Please add an Body'],
        },      
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Form', FormSchema)