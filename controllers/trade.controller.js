const Trade = require("../models/trade")

/* GET request handler */
const getTrade = async (req, res) => {
    const trades = await Trade.find()
    res.json(trades)
}

/* POST Request handler */
const addTrade = async (req, res) => {
    /* The request.body must have all these values */
    const trade = {
        signature: req.body.signature,
        mint: req.body.mint,
        sol_amount: req.body.sol_amount,
        is_buy: req.body.is_buy,
        user: req.body.user,
        symbol: req.body.symbol,
        image: req.body.image,
    }

    if (trade){
        await Trade.create(trade)
        res.status(201).json({message: "Trades Add Success"})
        res.redirect("/")
    } 
    else {
        res.status(400).json({message: "Unable to add trade"})
    }
}

/* PUT Request handler */
const updateTrade = (req, res) => {
    res.json({message: "update Trade"})
}

/* DELETE Request handler */
const deleteTrade = (req, res) => {
    res.json({message: "delete Trade"})
}

module.exports = {
    getTrade,
    addTrade,
    updateTrade,
    deleteTrade
}