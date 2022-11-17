//Packages
const { timeStamp } = require("console");
const express = require("express");
const app = express();
const http = require('http').Server(express)
const port = 80;
var ip = require("ip");

console.log("Initializing SafeGuard Server...")

//Parsing packaging from Express. Used to parse json packets on reception
app.use(express.json());
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const ipaddress = ip.address()
console.log(ip.address())

/*START ROUTING*/
// Default Channel
app.get("/", (req, res) => {
  console.log("SERVER PINGED at: " + new Date().toString)
  res.sendFile('views/homePage.html', {root: __dirname })
});

// Home Page
app.get('/home', function(req, res) {
    res.sendFile('views/homePage.html', {root: __dirname })
});

//Communication with ESP
app.get('/testReq', function(req, res){
    res.send("Successfully pinged Project SafeGuard's Server!\n Current Status: ONLINE")
})


//Cellular Communication - Body Contains Various Data from device. See documentation for what data we currently pass
app.post("/", jsonParser , (req, res) => {
  console.log("SERVER PINGED THROUGH POST")
  try{
    console.log(req.body)
    res.send("Hello World! - SD Server Recieved Your JSON!")
  } catch (e){
    console.log("Err: JSON Attatchment Exception - No Body")
    console.log(e)
  }
});
/*END SERVER ROUTING*/
/* Stylesheet Routing BEGIN */
app.use(express.static(__dirname + '/styles'));

app.use('/img' ,express.static(__dirname + '/views/img'));
/*Sylesheet Routing END*/


//Port Binding
app.listen(port, () => {
  console.log(`Capstone Server currently listening on ${port}.`);
});

/* Server Related END */

//Database Section
//TODO: Implement backend of DB for data analysis + testing
// var mysql = require('mysql'); //DB package import

// var con = mysql.createConnection({ //Connection build to sql
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

//End Database

/* Tunneling Section */
// ECEN PEOPLE DONT TOUCH THIS PART LOL
const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 80 , subdomain: "sourdough"});
  tunnel.url; //Tunnel URL on creation
  tunnel.on('close', () => { //Close tunnel upon termination
  });
})();
/* TUNNELING SECTION END */