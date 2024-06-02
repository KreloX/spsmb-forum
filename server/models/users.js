const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true },
    createdDate: { type: Date, required: true },
    password: { type: String, required: true },
    passwordToken: { type: String, required: false, index: { unique: true } },
    authToken: { type: String, required: true },
})

module.exports = mongoose.model('User', schema)
