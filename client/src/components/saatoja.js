// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors");
// const mysql = require("mysql");
// require("dotenv").config();

// // Set database paramets
// const db = mysql.createPool({
//   host: "eu-cdbr-west-03.cleardb.net",
//   port: "3307",
//   user: "b31ccaa8be508a",
//   password: "69f940be",
//   database: "heroku_db71926c51833b8",
// });



// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // Get data in database
// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM loads";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });
// // Add data to database
// app.post("/api/insert/", (req, res) => {
//   const sender = req.body.sender;
//   const recipient = req.body.recipient;
//   const product = req.body.product;
//   const vehicle = req.body.vehicle;
//   const number = req.body.number;
//   const mass = req.body.mass;

//   const sqlInsert =
//     "INSERT INTO loads (sender, recipient, product, vehicle, number, mass) VALUES (?,?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [sender, recipient, product, vehicle, number, mass],
//     (err, result) => {
//       console.log(result);
//     }
//   );
// });

// app.put("/api/update", (req, res) => {
//   const id = req.body.id;
//   const sender = req.body.sender;
//   const recipient = req.body.recipient;
//   const product = req.body.product;
//   const vehicle = req.body.vehicle;
//   const number = req.body.number;
//   const mass = req.body.mass;

//   const sqlUpdate =
//     "UPDATE loads SET sender = ?, recipient = ?, product = ?, vehicle = ?, number = ?, mass = ? WHERE id = ? ";
//   if (req)
//     db.query(
//       sqlUpdate,
//       [sender, recipient, product, vehicle, number, mass, id],
//       (err, result) => {
//         if (err) console.log(err);
//       }
//     );
// });

// // Delete row in table
// // Delete row in table
// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM loads WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.send(result);
//     }
//   });
// });

// app.listen(process.env.PORT || 3008, () => {
//   console.log("running on port 3008");
// });

// // npm init
// //  npm run dev käynnistää console.login
// // npm install cors body-parser express nodemon mysql

// // app.delete("/api/delete/:id", (req, res) => {
// //   const id = req.params.id;

// //   const sqlDelete = "DELETE FROM loads WHERE id = ?";
// //   db.query(sqlDelete, id, (err, result) => {
// //     if (err) console.log(err);
// //   });
// // });





// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors");
// const mysql = require("mysql");
// // Set database paramets
// const db = mysql.createPool({
//   host: "127.0.0.1",
//   port: "3307",
//   user: "root",
//   password: "password",
//   database: "keskimaki",
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // Get data in database
// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM loads";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });
// // Add data to database
// app.post("/api/insert/", (req, res) => {
//   const sender = req.body.sender;
//   const recipient = req.body.recipient;
//   const product = req.body.product;
//   const vehicle = req.body.vehicle;
//   const number = req.body.number;
//   const mass = req.body.mass;

//   const sqlInsert =
//     "INSERT INTO loads (sender, recipient, product, vehicle, number, mass) VALUES (?,?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [sender, recipient, product, vehicle, number, mass],
//     (err, result) => {
//       console.log(result);
//     }
//   );
// });

// app.put("/api/update", (req, res) => {
//   const id = req.body.id;
//   const sender = req.body.sender;
//   const recipient = req.body.recipient;
//   const product = req.body.product;
//   const vehicle = req.body.vehicle;
//   const number = req.body.number;
//   const mass = req.body.mass;

//   const sqlUpdate =
//     "UPDATE loads SET sender = ?, recipient = ?, product = ?, vehicle = ?, number = ?, mass = ? WHERE id = ? ";
//   if (req)
//     db.query(
//       sqlUpdate,
//       [sender, recipient, product, vehicle, number, mass, id],
//       (err, result) => {
//         if (err) console.log(err);
//       }
//     );
// });

// // Delete row in table
// // Delete row in table
// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM loads WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.send(result);
//     }
//   });
// });

// app.listen(3008, () => {
//   console.log("running on port 3008");
// });

// // npm init
// //  npm run dev käynnistää console.login
// // npm install cors body-parser express nodemon mysql
