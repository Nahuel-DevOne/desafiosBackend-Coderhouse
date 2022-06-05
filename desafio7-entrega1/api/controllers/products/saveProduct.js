const fs = require("fs");
const path = "./products.json";
const {v4: uuidv4} = require('uuid');

module.exports = async (req, res) => {
  const { title, price, thumbnail, description, stock } = req.body;
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  let lastProduct = dataJson[dataJson.length - 1];
  let id = lastProduct.id + 1;
  let sku = uuidv4();
  let timestamp = new Date().toISOString();
  req.body.sku = sku;
  req.body.timestamp = timestamp;
  req.body.id = id;
  req.body.price = parseFloat(price);
  let product = { title: title, price: req.body.price, thumbnail: thumbnail, description: description, stock: stock, id: id, sku: sku, timestamp: timestamp };
  dataJson.push(product);
  fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
    if (err) throw err;
  });
  res.status(200).json(req.body);
};