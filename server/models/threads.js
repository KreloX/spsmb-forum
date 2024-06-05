const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    createdDate: { type: Date, required: true },
    locked: { type: Boolean, required: true },
})

module.exports = mongoose.model('Thread', schema)
