const express = require("express");
const router = express.Router();
const main = require("../controllers/xyController.js");

router.get('/', main.index);
router.get('/about', main.about);
router.get('/gifts', main.gifts);
router.get('/shop', main.shop);
router.get('/contact', main.contact);

module.exports = router;
