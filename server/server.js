const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',
    port: "3307",
    user: "root",
    password:"password",
    database: "keskimaki",
  });
  
    app.use(cors());
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended: true}));

    app.get("/api/get", (req,res) => {
      const sqlSelect = "SELECT * FROM loads";
      db.query(sqlSelect, (err, result)=> {
        console.log(result);
      });
    });
    

    app.post("/api/insert/", (req,res)=> {
    const sender = req.body.sender;
    const recipient = req.body.recipient;
    const product = req.body.product;
    const vehicle = req.body.vehicle;
    const number = req.body.number;
    const mass = req.body.mass;

    const sqlInsert = "INSERT INTO loads (sender, recipient, product, vehicle, number, mass) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [sender, recipient, product, vehicle, number, mass], (err, result)=> {
        console.log(result);
      });
    });

    app.listen(3008, () => {
        console.log("running on port 3008");
      })


    //  npm run dev käynnistää console.login
    // npm install cors body-parser express nodemon mysql

  