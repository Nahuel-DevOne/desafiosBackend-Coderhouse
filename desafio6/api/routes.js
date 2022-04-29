const express = require("express");
const { Router } = express;

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
router.post("/products", saveProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteById);

module.exports = router;