const ProductRef = require("../models/product.model");

/* -------------------------------CRUD------------------------------- */

/* -------------------------------Create------------------------------- */
exports.createProduct = function(req, res){
    req.fields.price = parseFloat(req.fields.price);  //så det ikke har en string
    req.fields.weight = parseFloat(req.fields.weight);

    ProductRef.add({ ...req.fields })
    .then(ref => {
        ref.get().then(doc => res.status(201).json(doc.data()))  
    })
    .catch(error => res.json(error));
};

/* -------------------------------Read------------------------------- */
exports.getAllProducts = function(req, res){
    ProductRef.get().then(docs =>{
        const results = [] ;
        docs.forEach(doc => results.push(doc.data()))
        res.json(results);
    });
};

exports.getSingleProduct = function(req, res){
    ProductRef.where("sku", "==", req.params.sku).get()
        .then(docs => {
            docs.forEach(doc => res.json(doc.data()))
        });
};

/* -------------------------------Update------------------------------- */
exports.patchProduct = function(req, res){
    if(req.fields.price){
       req.fields.price = parseFloat(req.fields.price); 
    }
    if(req.fields.weight){
        req.fields.weight = parseFloat(req.fields.weight);
    }
    
    ProductRef.where("sku", "==", req.params.sku).get()
        .then(docs =>{
            docs.forEach(doc => doc.ref.update({ ...req.fields }).get()
                .then(doc => res.json(doc.data()))
            );
        })
};

/* -------------------------------Delete------------------------------- */
exports.deleteProduct = function(req, res){
    ProductRef.where("sku", "==", req.params.sku).get()
        .then(docs => {
            docs.forEach(doc => doc.ref.delete());
        })
        .catch(err => res.status(500).json({message: err}));
    res.status(204).end();
};