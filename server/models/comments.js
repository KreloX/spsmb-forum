const mongoose = require('mongoose')

const schema = mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    threadId: { type: String, required: true },
})

module.exports = mongoose.model('Comment', schema)
