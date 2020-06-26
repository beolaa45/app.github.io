
const formidable = require("formidable");
const _ = require("lodash");
const Product = require("../models/product");
const fs = require("fs");
const { errorHandler } = require('../helpers/dbErrorHandler');
const { sortBy } = require("lodash");



exports.read = (req, res) => {
    //no want size img
    // req.product.photo = undefined;
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
        const {name, description, price, category, quantity} = fields;
        if(!name || !description || !price || !category || !quantity ) {
            return res.status(400).json({
                error: "All fields",
                fields
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
                    error: err
                })
            }
            res.json(result)
        })
    })
}


exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, deleteProduct) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }

        res.json({
            // deleteProduct,
            message: "Product delete succsessfuly"
        })
    })
}

exports.update = (req, res) => {
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
        if(!name || !description || !price || !category || !quantity) {
            return res.status(400).json({
                error: "All fil"
            })
        }
       
        //take in new Product 
        let product = req.product;
        product = _.extend(product, fields);
        
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
                    error: err
                })
            }

            res.json(result)
        })
    })
} 

//////////// SELL / ARRIVAL
// by sell = /products?sortBy=sold&order=des&limit=4


exports.list = (req, res) => {
    //asc tu thap len cao
    //desc tu cao xuong thap
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Product.find()
    //no seclect photo because image grow and very slow
    .select("-photo")  
    .populate("category")   
    .sort([[sortBy, order]]) 
    .limit(limit)
    .exec((err, products) => {
        if(err) {
            return res.status(400).json({
                error: "products not found"
            })
        }

        res.json(products)
    })       
};

//PRODUCT RELATED
// it will find the products based on the req product category
// other products that has the same category, will be returned
exports.litsRelated = (req, res) => {
        let limit = req.query.limit ? parseInt(req.query.limit) : 6;
        //find product tru req.product => _id: {$ne: req.product}
        //
        Product.find({_id: {$ne: req.product}, category: req.product.category})
        .limit(limit)
        //find category voi id va name xuat hien nhieu nhat
        .populate("category", "_id name")
        .exec((er, products) => {
            if(er) {
                return res.status(400).json({
                 error: "Products not found"
                })
            }

            res.json(products)
        })
};

exports.listCategories = (req, res) => {
    Product.distinct("category", {}, (err, categories) => {
        if(err) {
            return res.status(400).json({
                error: "Category not found"
            })
        }

        res.json(categories)
    })
}

//list products by search 
exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    for(let key in req.body.filters) {
        if(req.body.fields[key].length > 0) {
            if(key === 'price'){
                //gte - greater than price [0-10]
                //lte -less than
            findArgs[key] = {
                $gte: req.body.filters[key][0],
                $lte: req.body.filters[key][1],
    
                }
            }else {
                findArgs[key] = req.body.filters[key]
            }
    
        }
    }

    Product.find(findArgs)
.select("-photo")
.populate("category")
.sort([[sortBy, order]])
.skip(skip)
.limit(limit)
.exec((err, data) => {
    if(err) {
        return res.status(400).json({
            error: "Product not found"
        })
    }

    res.json({
        size: data.length,
        data
    })
})
};

exports.photo = (req, res, next) => {
    if(req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data)
    }
    next()
}



