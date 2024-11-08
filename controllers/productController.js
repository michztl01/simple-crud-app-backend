const Product = require('../models/product.model.js')

const getProducts = async(req, res) => {
  try{
    const Products = await Product.find({});
    res.status(200).json(Products);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

const getSingleProduct = async(req, res) => {
  try{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

const createProduct = async(req, res) => {
  try{
    // crea e immette nel database l'oggetto Product da noi passato
    // segue lo schema di Product, quindi se i dati NON sono del formato
    // corretto ci da errore
    // if I submitting an HTML form, now it's accesible in req.body
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

const updateProduct = async(req, res) => {
  try{
    const { id } = req.params;
    //updating with whatever the user gave 
    const product = await Product.findByIdAndUpdate(id, req.body);
    if(!product){
      return res.status(404).json({message: "Product not found!"})
    }
    //show the user the updated product
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

const deleteProduct = async(req, res) => {
  try{
    const { id } = req.params;
    //updating with whatever the user gave 
    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: "Product not found!"})
    }
    res.status(200).json({message: "Product deleted successfully"});
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };