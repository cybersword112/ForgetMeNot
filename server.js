const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/homeRoutes')
const noteRoutes = require('./routes/noteRoutes')

require('dotenv').config({path:'./config/.env'})

connectDB()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/',homeRoutes)
app.use('/notes',noteRoutes)

app.listen(process.env.PORT,()=>{
    console.log('listening on port' + process.env.PORT)
})