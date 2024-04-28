const Coin = require("../models/coin")

/* GET request handler */
const getCoin = async (req, res) => {
    const coins = await Coin.find()
    res.json(coins)
}

/* POST Request handler */
const addCoin = async (req, res) => {
    const highlights = req.body.highlights.split(",")
    const size = req.body.size.split(",")

    /* The request.body must have all these values */
    const coin = {
        name: req.body.name,
        symbol: req.body.symbol,
        description: req.body.description,
        social_website: req.body.social_website,
        social_twitter: req.body.social_twitter,
        social_telegram: req.body.social_telegram,
        image: req.body.image,
        market_cap: req.body.market_cap,
        timestamp: Date.now(),
    }

    if(coin){
        await Coin.create(coin)
        res.status(201).json({message: "Coins Add Success"})
        res.redirect("/")
    } 
    else {
        res.status(400).json({message: "Unable to add coin"})
    }
}

/* PUT Request handler */
const updateCoin = (req, res) => {
    res.json({message: "update Coin"})
}

/* DELETE Request handler */
const deleteCoin = (req, res) => {
    res.json({message: "delete Coin"})
}

module.exports = {
    getCoin,
    addCoin,
    updateCoin,
    deleteCoin
}