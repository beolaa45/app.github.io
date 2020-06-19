const mongoose = require('mongoose');
//encode
const crypto = require('crypto');
//unique email
const uuid = require('uuid');
// const { v1: uuidv1 } = require('uuid')
const router = require('../routes/user');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32,
    },
    hashed_password: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        //So there with two types of user one will 
        //be admin and one will be a regular user. 
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
    
}, {timestamps: true})

//Virtual firld

userSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuid.v1()
    this.hashed_password = this.encryptPassword(password)
})
.get(function() {
    return _password
});

userSchema.methods = {
    encryptPassword: function(password) {
        if(!password) return '';

        try{
            return crypto.createHmac('sha1', this.salt)
                            .update(password)
                            .digest('hex')
        } catch (err) {
            return ''
        }
    }
}

module.exports = mongoose.model("User", userSchema);