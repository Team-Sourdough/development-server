const { timeStamp } = require("console");
const express = require("express");
const app = express();
const http = require('http').Server(express)
const port = 80;
var ip = require("ip");
// console.dir ( ip.address() );
const ipaddress = ip.address()
console.log(ip.address())

/*START ROUTING*/
// Default Channel
app.get("/", (req, res) => {
  console.log("SERVER PINGED at: " + timeStamp)
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
