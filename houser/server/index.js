// SERVER DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
// CONTROLLERS
const controller = require("./controllers/controller");
// PORT
const port = 4000;
// CREATE SERVER
app = express();

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("dbInstance", db);
  })
  .catch(err => {
    console.log(err);
  });
// MIDDLEWARES
app.use(json());
app.use(cors());
// ENDPOINTS

// LISTENER
app.listen(port, () => {
  console.log(`Port: ${port} listening!`);
});
