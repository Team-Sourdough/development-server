const { timeStamp } = require("console");
const express = require("express");
const app = express();
const http = require('http').Server(express)
const port = 80;
var ip = require("ip");
// console.dir ( ip.address() );

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


//Cellular Communication - Body Contains Various Data from device. See documentation for what
app.post("/", jsonParser , (req, res) => {
  console.log("SERVER PINGED")
  console.log(req.body)
  res.send("Hello World! - SD Server")

    // console.log(JSON.parse(req.body))
  // console.log(JSON.stringify(JSON.parse(req.body)))
  // console.log("===================================")
  // console.log(req.db)
  // console.log(req)
});
/*END ROUTING*/

/*Sylesheet Routing */
app.use(express.static(__dirname + '/styles'));

app.use('/img' ,express.static(__dirname + '/views/img'));

app.listen(port, () => {
  console.log(`Capstone Server currently listening on ${port}.`);
});

// http.listen(port,function () {
//   console.log(`Capstone Server currently listening on ${port}.`);
// });
