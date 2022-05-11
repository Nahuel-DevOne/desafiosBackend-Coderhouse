const fs = require("fs");
const path = "./cart.json";

module.exports = async (req, res) => {
  const id = Number(req.params.id);
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  const cart = dataJson.find((item) => item.id === id);
  res.json(cart.products);
};