const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


const route = require("./routes");
app.use(express.json());











route(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));