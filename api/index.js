const express = require("express")
const cors = require("cors")
const bodyParser =  require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const User = require('./models/userModel')

// app initiation
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json())

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

app.listen(4000)