const fs = require("fs");
const path = "./cart.json";

module.exports = async (req, res) => {
    const products = req.body;
    const timestamp = new Date().toISOString();

    const data = await fs.promises.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        return JSON.parse(data);
    });
    const dataJson = JSON.parse(data);
    let lastCart = dataJson[dataJson.length - 1];
    let id = dataJson.length > 0 ? lastCart.id + 1 : 1;
    let cart = { products: products, timestamp: timestamp, id: id };
    dataJson.push(cart);
    fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
        if (err) throw err;
    });
    res.status(200).json(cart);
};