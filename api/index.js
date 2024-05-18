const express = require("express")

// app initiation
const app = express()

// test
app.post('/register', (req,res) => {
    res.json("test ok")
})

app.listen(4000)