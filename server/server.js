const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");


// Set database paramets

const db = mysql.createPool({
  host: "eu-cdbr-west-03.cleardb.net",
  // port: "3306",
  user: "bebd231645def4",
  password: "9b260785",
  database: "heroku_855c75dcea4f2cf",
});

const PORT = 3008;

//bebd231645def4:9b260785@eu-cdbr-west-03.cleardb.net/heroku_855c75dcea4f2cf?reconnect=true
// mysql:

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Get data in database
app.get("/api/get/", (req, res) => {
  const sqlGet = "SELECT * FROM loads";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// Add data to database
app.post("/api/insert/", (req, res) => {
  const {sender,recipient,product,vehicle,number,mass} = req.body;
  const sqlInsert = "INSERT INTO loads (sender, recipient, product, vehicle, number, mass) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [sender, recipient, product, vehicle, number, mass],
    (error, result) => {
      if(error) {
        console.log(error);
      }
      
    }
  );
});




// Delete row in table
app.delete("/api/delete/:id", (req, res) => {
  const {id} = req.params.id;
  db.query("DELETE FROM loads WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const  {id}  = req.body;
  const sqlGet = "SELECT * FROM loads where id = ?";
  db.query(sqlGet, id, (error, result) => {
    if(error){
      console.log(error);
    }
    res.send(result);
  });
});
// Update database.

app.put("/api/update/:id", (req,res) => {
  const {id} = req.params;
  const {sender, recipient, product, vehicle, number, mass} = req.body;
  const sqlUpdate = "UPDATE loads SET sender = ?, recipient = ?, product = ?, vehicle = ?, number = ?, mass = ? WHERE id = ?";
  db.query(sqlUpdate, [sender, recipient, product, vehicle, number, mass,  id], (error, result) =>{
      if(error){
          console.log(error);
      }
      res.send(result);
  });
});

// app.listen(port, (err) => {
//   if (err) return console.log(err);
//   console.log("Server running on port", port);
// })

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// app.listen(3008, () => {
//   console.log("running on port 3008");
// });

// npm init
//  npm run dev käynnistää console.login
// npm install cors body-parser express nodemon mysql