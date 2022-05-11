const fs = require("fs");
const path = "./cart.json";

module.exports = async (req, res) => {
    const id = Number(req.params.id);
    const productId = Number(req.params.productId);
    const data = await fs.promises.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        return JSON.parse(data);
    });
    
    const dataJson = JSON.parse(data);
    const cart = dataJson.find((item) => item.id === id);

    const newArray = cart.products.filter((item) => item.id !== productId);
    cart.products = newArray;
    fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
        if (err) throw err;
    });
    res.status(200).json(`Product removed from cart with id: ${id}`);
};