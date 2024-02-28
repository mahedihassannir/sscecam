const express = require("express");
const app = express();
require("dotenv").config()
const morgan = require("morgan");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const chalk = require("chalk");
const authRoute = require("./routes/AuthRoute");
// all the middlewares are here
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use("/api/v1/auth", authRoute)
// all the middlewares are here

mongoose.connect("mongodb+srv://ssc:ssc@cluster0.oextbde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

})
    .then(() => {
        console.log(chalk.bgGreen("db is connected"));
    })
    .catch(err => {

        console.log(err?.message);

    });






module.exports = app;