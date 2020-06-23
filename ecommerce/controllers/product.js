
const formidable = require("formidable");
const _ = require("lodash");
const Product = require("../models/product");
const fs = require("fs");
const { errorHandler } = require('../helpers/dbErrorHandler')


exports.read = (req, res) => {
    //no want size img
    req.product.photo = undefined;
    return res.json(req.product)
}

// find Id user to into product
exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if(err) {
            return res.status(400).json({
                error: "Product not found"
            })
        }

        req.product = product;
        next()
    })
} 

//create product thought category
exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        };
        //check for all fieds
        const {name, description, price, category, quantity, shipping} = fields;
        if(!name || !description || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                error: "All fil"
            })
        }
        let product = new Product(fields);

        if(files.photo){
            // 1kb ~ 1000
            if(files.photo.size > 100000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                })
            }
        }

        if(files.photo){
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}

