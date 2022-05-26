const {Schema, model} = require("mongoose");
// const { isModuleNamespaceObject } = require("util/types");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        // required: true,
        default:0
    },
});

module.exports = model("Product", productSchema);

