const express = require("express");
const dotenv = require("dotenv")

const database = require("./config/db")

const app = express();
dotenv.config();

database();

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000");
});