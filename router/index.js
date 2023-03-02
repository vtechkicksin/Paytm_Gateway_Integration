const express = require("express");
const router = express.Router();

const controller = require("../controller/index");

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });





router.post(
'/paynow',
[parseUrl, parseJson],
controller.pay);

router.post(
    '/callback',
    controller.pay);

module.exports = router;