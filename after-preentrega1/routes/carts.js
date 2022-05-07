const express = require('express');
const fs = require('fs');
const {Router} = express

const router = new router();

router.get('/', (req, res) => { 
    res.render("views/cart/index.ejs", {root: "."})
});

router.post('/', (req, res) => { });
router.post('/', (req, res) => { });
router.delete('/', (req, res) => { });
router.delete('/', (req, res) => { });
router.put('/', (req, res) => { });
