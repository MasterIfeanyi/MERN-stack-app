const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {registerValidation} = require("./controllers/validation")
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
// const dotenv = require('dotenv');
// dotenv.config();


// Routes
const userRoutes = require("./routes/api/routes")

const port = process.env.PORT || 5000;


//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));


//json bodyParser
app.use(bodyParser.json());


//set static folder
app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "build", "index.html"))
})


// //set template engine
// app.set("view engine", "ejs");

// //set views file
// app.set("views", path.join(__dirname, "views"));



//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected to MongoDB"))
.catch(err => console.log(err));



// use routes 

app.use("/api/route", userRoutes)


app.listen(port, () => console.log("sever is on 3000"));
