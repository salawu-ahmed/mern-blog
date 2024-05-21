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
const multer = require('multer')
const uploadsMiddleware = multer({dest: './uploads'})
const fs = require('fs')
const Post = require("./models/postModel")

// app initiation
const app = express()

// middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname+'/uploads'))

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

// registration route
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
            const token = jwt.sign({username, id:userDoc._id}, process.env.secret, {expiresIn:60*60})
            res.cookie('token', token).json({
                id: userDoc._id,
                username
            })
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

// log out functionaliy
app.post('/logout', (req, res) => {
    res.cookie("token", "").json("ok")
})

// create a new post 
app.post('/createpost', uploadsMiddleware.single('file'), async (req, res) => {
    const {originalname, path} = req.file
    const {title, content, summary} = req.body
    // split allows us to split the string into an array of substrings based on a given pattern
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + "." + ext 
    fs.renameSync(path, newPath)
    const {token} = req.cookies
    const userInfo = jwt.verify(token, process.env.secret)
    try {
        const newPostDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: userInfo.id
        })
        res.json(newPostDoc)
    } catch (error) {
        console.error(error);
    }
    // req.file because thats how we named it in our form data , we could have used avatar instead
    // res.json({files: req.file})
})

app.get('/posts', async (req, res) => {
    const posts = await Post.find().populate('author', ['username'])
    res.json(posts)
})
app.listen(4000)