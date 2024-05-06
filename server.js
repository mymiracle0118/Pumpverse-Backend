const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// const coinRoute = require('./routes/coin');
// const postRoute = require('./routes/post');
// const tradeRoute = require('./routes/trade');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(express.json());

require('./routes/index.js')(app)
// app.use('/coin', coin);
// app.use('/post', post);
// app.use('/trade', trade);

require('./models/db');

// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
