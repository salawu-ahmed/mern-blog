const mongoose = require("mongoose")
const {Schema} = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)