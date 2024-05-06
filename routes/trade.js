const express = require('express');
const router = express.Router();
const { getTrade, addTrade, updateTrade, deleteTrade } = require("../controllers/trade.controller");

router.get('/', getTrade);

router.post('/', addTrade);

router.put('/:id', updateTrade)

router.delete('/:id', deleteTrade);

module.exports = router;