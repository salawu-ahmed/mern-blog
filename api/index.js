const express = require("express")
const cors = require("cors")
const bodyParser =  require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const User = require('./models/userModel')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

// app initiation
const app = express()

// middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(bodyParser.json())
app.use(cookieParser())

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.uri)
        console.log("Your deployment has been pinned. Connected to mongoDB successfully");
    } catch (error) {
        console.error(error);
    }
}
connect()

// test
app.post('/register', async (req,res) => {
    const {username, password} = req.body
    try {
        const newUser = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt)
        })
        res.json(newUser)
    } catch (error) {
        console.error(error);
    }
})

// login logic
app.post('/login', async (req, res) => {
    const {username, password} = req.body
    if(!username || !password) {
        res.json('kindly fill all the fields')
        return
    }
    try {
        const userDoc = await User.findOne({username})
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if(passOk) {
            // respond with jsonwebtokens
            const token = jwt.sign({username, id:userDoc._id}, process.env.secret)
            res.cookie('token', token).json('ok')
        } else {
            res.status(400).json("Wrong credentials") 
        }
    } catch (error) {
        console.log(error);
    }
})

// checking if user token is valid
app.get('/profileInfo', (req, res) => {
    const {token} = req.cookies
    const userInfo = jwt.verify(token, process.env.secret)
    res.json(userInfo)
})

app.listen(4000)