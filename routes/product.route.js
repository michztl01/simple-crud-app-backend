const express = require('express');
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getSingleProduct, createProduct } = require('../controllers/productController.js');
const { updateProduct, deleteProduct } = require('../controllers/productController.js');

// the function inside the router is called a CONTROLLER FUNCTION(getProducts)
router.get('/', getProducts);

router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;