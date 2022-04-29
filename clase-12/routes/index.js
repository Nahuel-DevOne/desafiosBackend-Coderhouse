const express = require("express");
// const app = express();

const {Router} = express
const router = new Router()

router.get("/", (req, res) => {
    // res.sendFile("index.html", {root: __dirname + "/public"});
    res.sendFile("public/index.html", {root: "."});
});

module.exports = router
