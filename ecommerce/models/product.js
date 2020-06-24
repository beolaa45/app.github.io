const mongoose = require('mongoose');
//encode
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number
    },
    sold: {
        type:Number,
        default: 0
    },
    shippings: {
        type: Boolean,
        required: true
    }
    }, {timestamps: true})


module.exports = mongoose.model("Product", productSchema);