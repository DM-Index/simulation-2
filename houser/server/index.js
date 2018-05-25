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
app.get("/api/houses", controller);
// Receive: Nothing
// Send: [
//   {
//     id: 1,
//     name: 'example',
//     address: '123 Example st',
//     city: 'orem',
//     state: 'ut',
//     zip: 84320
//   }
// ]
app.post("/api/house", controller);
// Receive: req.body{
//   name: [
//     {
//       //     id: 1,
//       //     name: 'example',
//       //     address: '123 Example st',
//       //     city: 'orem',
//       //     state: 'ut',
//       //     zip: 84320
//       //   }
//   ]
// }
// Send: status 200

app.delete("api/house/:id");
// Receive: req.params.id 7
// Send: status 200
// LISTENER
app.listen(port, () => {
  console.log(`Port: ${port} listening!`);
});
