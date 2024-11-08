const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
// We are not allowed to pass JSON data by default
// We have to configure a middleware
app.use(express.json());
//configuration for HTML form submission x-www-form-urlencoded encoding type
app.use(express.urlencoded({extended: false}));

//routes middleware
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send("Hello from Node API Server");
});


// app.get('/api/products', async(req, res) => {
//   try{
//     const Products = await Product.find({});
//     res.status(200).json(Products);
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });

// app.get('/api/products/:id', async(req, res) => {
//   try{
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });

// app.post('/api/products', async(req, res) => {
//   try{
//     // crea e immette nel database l'oggetto Product da noi passato
//     // segue lo schema di Product, quindi se i dati NON sono del formato
//     // corretto ci da errore
//     // if I submitting an HTML form, now it's accesible in req.body
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });

// // update a product
// app.put('/api/products/:id', async(req, res) => {
//   try{
//     const { id } = req.params;
//     //updating with whatever the user gave 
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if(!product){
//       return res.status(404).json({message: "Product not found!"})
//     }
//     //show the user the updated product
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });

// app.delete('/api/product/:id', async(req, res) => {
//   try{
//     const { id } = req.params;
//     //updating with whatever the user gave 
//     const product = await Product.findByIdAndDelete(id);
//     if(!product){
//       return res.status(404).json({message: "Product not found!"})
//     }
//     res.status(200).json({message: "Product deleted successfully"});
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// });


mongoose.connect('mongodb://localhost:27017/CRUDtesting')
.then(() => {
  console.log("Connected");
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
})
.catch(() => {
  console.log("Not connected. A problem occur!");
});