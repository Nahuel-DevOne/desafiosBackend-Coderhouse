const fs = require("fs");
const path = "./products.json";

module.exports = async (req, res) => {
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  res.json(dataJson);
};