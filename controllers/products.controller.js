const ProductRef = require("../models/product.model");

exports.createProduct = function(req, res){
    //opret e product - mangler
};

exports.getAllProducts = function(req, res){
    res.json(products);
    ProductRef.get().then(docs =>{
        docs.forEach(doc => console.log(doc.data()))
    });
};

exports.getSingleProduct = function(req, res){
    const result = products.find(product => product.sku == req.params.sku);
    res.json(result);
};

exports.deleteProduct = function(req, res){
    //sletter et product
};

exports.patchProduct = function(req, res){
    //opdaterer et product
};

exports.postProduct = function(req, res){
    // opret et product
};