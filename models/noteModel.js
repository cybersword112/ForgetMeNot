const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    note:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        required:true,
        default:false,
    },
    microsoftId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Note',NoteSchema)