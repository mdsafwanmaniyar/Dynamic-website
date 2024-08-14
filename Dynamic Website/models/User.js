const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true
    },
    Password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
