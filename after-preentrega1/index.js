const express = require('express');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/carts');
// const userRoute = require('./routes/users');

app.use("api/products", productRoute);
app.use("api/carts", cartRoute);


const app = express();






app.listen(8080, () => {
    console.log('Server running on port 8080');
}) 