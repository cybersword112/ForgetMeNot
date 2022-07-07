const Note = require('../models/noteModel')

module.exports = {
    getNotes: async (req,res)=>{
        try{
            let notes = await Note.find()
            let itemsLeft = await Note.countDocuments({completed:false})
            res.render('notes.ejs',{
                notes:notes,
                itemsLeft:itemsLeft,
            })
        }catch(err){
            console.log(err)
        }
    },
    createNote:async (req,res)=>{
        try{
            const {note} = req.body
            await Note.create({
                note,
                complete:false,
            })
            res.redirect('/notes')
        }catch(err){
            console.log(err)
        }
    },
    deleteNote: async (req,res)=>{
        try{
            const {id} = req.body
            await Note.findOneAndDelete({_id:id})
            res.sendStatus(200)
        }catch(err){
            console.log(err)
        }
    },
    markNoteComplete: async (req,res)=>{
        try{
            const {id} = req.body
            await Note.findByIdAndUpdate(
                {_id:id},
                {completed: true})
            res.sendStatus('200')
        }catch(err){
            console.log(err)
        }
    },
    markNoteIncomplete: async (req,res)=>{
        try{
            const {id} = req.body
            await Note.findByIdAndUpdate(
                {_id:id},
                {completed: false})
            res.sendStatus('200')
        }catch(err){
            console.log(err)
        }
    }
}

