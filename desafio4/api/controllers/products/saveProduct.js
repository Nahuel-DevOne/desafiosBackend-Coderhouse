const fs = require("fs");
const path = "./products.json";

module.exports = async (req, res) => {
  const { title, price, thumbnail } = req.body;
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  let lastProduct = dataJson[dataJson.length - 1];
  let id = lastProduct.id + 1;
  req.body.id = id;
  let product = { title: title, price: price, thumbnail: thumbnail, id: id };
  dataJson.push(product);
  fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
    if (err) throw err;
  });
  res.status(200).json(req.body);
};