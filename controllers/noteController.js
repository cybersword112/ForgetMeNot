const Note = require('../models/noteModel')

module.exports = {
    getNotes: async (req,res)=>{
        try{
            //grab logged in user todos
            let notes = await Note.find({microsoftId:req.user.microsoftId})
            //count logged in user notes not marked complete
            let itemsLeft = await Note.countDocuments({microsoftId:req.user.microsoftId,completed:false})
            res.render('notes.ejs',{
                notes:notes,
                itemsLeft:itemsLeft,
                user:req.user
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
                microsoftId:req.user.microsoftId,
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

