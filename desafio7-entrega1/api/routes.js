const express = require("express");
const { Router } = express;
const admin = require('./middlewares/admin');

//cart controllers
const saveCart = require('./controllers/cart/saveCart');
const deleteCartById = require('./controllers/cart/deleteCartById');
const getProductsFromCart = require('./controllers/cart/getProductsFromCart');
const saveProductsToCart = require('./controllers/cart/saveProductsToCart');
const deleteProductsFromCart = require('./controllers/cart/deleteProductsFromCart');

// Products Controllers
const getAll = require("./controllers/products/getAll");
const getById = require("./controllers/products/getById");
const saveProduct = require("./controllers/products/saveProduct");
const updateProduct = require("./controllers/products/updateProduct");
const deleteById = require("./controllers/products/deleteById");

const router = new Router();

// Products Routes
router.get("/products", getAll);
router.get("/products/:id", getById);
router.post("/products", admin, saveProduct);
router.put("/products/:id", admin, updateProduct);
router.delete("/products/:id", admin, deleteById);

//cart routes
router.post("/cart", saveCart);
router.delete("/cart/:id", deleteCartById);
router.get("/cart/:id/products", getProductsFromCart);
router.post("/cart/:id/products", saveProductsToCart);
router.delete("/cart/:id/products/:productId", deleteProductsFromCart);

module.exports = router;