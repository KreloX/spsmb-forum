const mongoose = require('mongoose')

const schema = mongoose.Schema({
    createdDate: { type: String, required: true },
    header: { type: String, required: true },
    text: { type: String, required: true },
    user: { type: String, required: true },
    isLocked: { type: Boolean, required: true },
})

module.exports = mongoose.model('Forum', schema)
