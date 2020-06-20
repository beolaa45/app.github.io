const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000,
        },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32,
        },
    category: {
        type: ObjectId,
        //lam viec voi model Category
        ref: "Category",
        required: true
        },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shippings: {
        required: false,
        type: Boolean
    }
        //thoi gian update sp
}, {timestamps: true})

//Virtual firld



module.exports = mongoose.model("Product", productSchema);