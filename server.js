const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv').config()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const mongoConnectionStr = process.env.MONGO_STR

let db;
const dbCollection = 'notes'
MongoClient.connect(mongoConnectionStr,{ useUnifiedTopology: true })
.then(client=>{
    console.log('connected to mongo')
    db = client.db('GeneralTest')
})


app.get('/', async (req,res)=>{
    try{
        let data = await db.collection(dbCollection).find().toArray()
        res.render('index',{
            data:data
        })
    }catch(err){
        console.log(err)
    }
})

app.post('/', async (req,res)=>{
    try{
        const {note} = req.body
        let op = await db.collection(dbCollection).insertOne({
            note,
            complete:false,
        })
        console.log(op)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
})

app.delete('/',async (req,res)=>{
    try{
        const {note} = req.body
        await db.collection(dbCollection).findOneAndDelete({note:note})
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
})

app.put('/', async (req,res)=>{
    try{
        const {note} = req.body
        let {complete} = req.body
        complete = (complete === 'true' ? false : true)
        await db.collection(dbCollection).updateOne(
            {note:note},
            {$set:{'complete': complete}})
        res.sendStatus('200')
    }catch(err){
        console.log(err)
    }
})



app.listen(process.env.PORT,()=>{
    console.log('listening on port' + process.env.PORT)
})