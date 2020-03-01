const mongoose = require('../database/index')

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('user', UserSchema )