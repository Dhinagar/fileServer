const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true
    },
    first_name: String,
    last_name: String,
    age: Number,
    email: String,
    
})

const UserSchema = mongoose.model('user', userSchema)

module.exports = UserSchema;