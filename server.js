const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/homeRoutes')
const noteRoutes = require('./routes/noteRoutes')


require('dotenv').config({path:'./config/.env'})

require('./config/passport')(passport);

connectDB()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// sessions
app.use(
    session({
        secret:'some shit',
        resave:false,
        saveUninitialized:false,
        store:MongoStore.create({ mongoUrl:process.env.MONGO_STR }),
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/',homeRoutes)
app.use('/auth',authRoutes)
app.use('/notes',noteRoutes)

app.listen(process.env.PORT,()=>{
    console.log('listening on port' + process.env.PORT)
})