const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));

app.set("view engine", "ejs");

var route_setter = require("./routes/pets.js");
route_setter(app);

app.listen(port, () => {
  console.log("Listening on " + port);
})
