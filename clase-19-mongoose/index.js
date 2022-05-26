require("./db");
// const express = require("express");

const Product = require("./models/Products.js");

/** CRUD CON MONGOOSE */


/** para guardar */
// const saveProduct = (req, res) => {
//     const newProduct = new Product({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price
//     });
// };
const saveProduct = (req, res) => {
    const newProduct = new Product({
        name: "Tablet",
        description: "Tablet de google",
        price: 4000
    });
    
    /** comportamiento asíncrono */
    const productSaved = await newProduct.save();
    return productSaved
};


saveProduct().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

/** para leer */
const getAllProducts = async() => {
    const products = await Product.find();
    return products
};

getAllProducts().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});


/** leer por ID */
const getProductById = async(id) => {
    const product = await product.find({_id: id});
    return product
}

getProductById().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

/** update */
const updateProduct = async(id, newData) => {
    // const product = await Product.findByIdAndUpdate(id, newData);
    // return product
    await product.findOneAndUpdate({_id: id}, newData);
}

/** borrar */
const findOneAndDelete = async(id) => {
    const product = await Product.findOneAndDelete({_id: id});
    return product
}
