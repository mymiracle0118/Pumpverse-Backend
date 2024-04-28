const express = require('express');
const router = express.Router();
const { getCoin, addCoin, updateCoin, deleteCoin } = require("../controllers/coin.controller");

router.get('/', getCoin);

router.post('/', addCoin);

router.put('/:id', updateCoin)

router.delete('/:id', deleteCoin);

module.exports = router;