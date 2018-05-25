const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const controller = require("./controllers/controller");

const port = 4000;

app = express();

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Port: ${port} listening!`);
});
