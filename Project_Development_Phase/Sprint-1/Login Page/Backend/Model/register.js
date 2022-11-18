const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    Password: {
        type: String,
        required: true
    },
    Phno:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Userschema',UserSchema);