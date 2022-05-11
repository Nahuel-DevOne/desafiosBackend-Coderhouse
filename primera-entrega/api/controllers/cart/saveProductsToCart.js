const fs = require("fs");
const path = "./cart.json";

module.exports = async (req, res) => {
    const id = Number(req.params.id);
    const products = req.body;
    const data = await fs.promises.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        return JSON.parse(data);
    });
    
    const dataJson = JSON.parse(data);
    const cart = dataJson.find((item) => item.id === id);

    products.map((product) => {
        cart.products.push(product);
    });

    fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
        if (err) throw err;
    });
    res.status(200).json(`Products added to cart with id: ${id}`);

};