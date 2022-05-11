const fs = require("fs");
const path = "./products.json";

const updateProduct = async (req, res) => {
  const id = Number(req.params.id);
  const { title, price, thumbnail, description, stock } = req.body;
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  const item = dataJson.find((item) => item.id === id);
  if (typeof item === "undefined") {
    res.status(404).json({ error: "Product doesn't exists" });
  } else {
    item.title = title;
    item.price = price;
    item.thumbnail = thumbnail;
    item.description = description;
    item.stock = stock;
    fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
      if (err) throw err;
    });
    res.status(200).json(item);
  }
};

module.exports = updateProduct;