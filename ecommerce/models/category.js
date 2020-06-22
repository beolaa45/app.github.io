const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        }
        //thoi gian update sp
}, {timestamps: true})

//Virtual firld



module.exports = mongoose.model("Category", categorySchema);