const cors = require('cors');

module.exports = (app) => {
    app.use('/api/coin', require("./coin"));
    app.use('/api/post', require("./post"));
    app.use('/api/trade', cors(), require("./trade"));
}