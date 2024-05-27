const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordToken: { type: String, required: false, index: { unique: true } },
})

module.exports = mongoose.model('User', schema)
