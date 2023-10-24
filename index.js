const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());


const route = require("./routes");
app.use(express.json());






route(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));