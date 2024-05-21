const mongoose = require("mongoose")
const {Schema} = mongoose

const PostSchema = new Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    },
    content: {
        type: String
    },
    cover: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)