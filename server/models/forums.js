const mongoose = require('mongoose')

const schema = mongoose.Schema({
    createdDate: { type: Date, required: true },
    header: { type: String, required: true },
    text: { type: String, required: true },
    user: { type: String, required: true },
    locked: { type: Boolean, required: true },
})

module.exports = mongoose.model('Forum', schema)
