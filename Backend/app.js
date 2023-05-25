const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/salary-routes");
const routerf = require("./routes/food-routes");
const routerr = require("./routes/customer-routes");
const routerrr = require("./routes/room-routes");
const routerd = require("./routes/dilivary-routes");

const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/salarys", router);
app.use("/foods", router);
app.use("/customers", router);
app.use("/rooms", router);
app.use("/dilivarys", router);

// localhost:5000/customers
// localhost:5000/salarys

// Change the port to 8080
app.set("port", 8080);

mongoose
  .connect("mongodb+srv://Athas:athas12@class.kidsxjc.mongodb.net/")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
