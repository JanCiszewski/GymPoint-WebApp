const express = require("express");
const dotenv = require("dotenv")
const database = require("./config/db")

dotenv.config();
const app = express();


const homePageRoutes = require("./routes/homePageRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

database();

app.use("/", homePageRoutes);

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000");
});