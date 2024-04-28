app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))