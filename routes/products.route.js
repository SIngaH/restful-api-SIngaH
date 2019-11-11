const { createProduct, getAllProducts, getSingleProduct, deleteProduct, patchProduct, postProduct } = require("../controllers/products.controller");

module.exports = function(router){
    router.options("/products", function(req, res){
        res.header("Allow", "OPTIONS, GET, POST");
        res.status(204);
        res.end();
    });

    router.create("/products", createProduct);

    router.get("/products", getAllProducts);

    router.get("/products/:sku", getSingleProduct);

    router.delete("/products/:sku", deleteProduct);

    router.patch("/products/:sku", patchProduct);

    router.post("/products", postProduct);
};
 