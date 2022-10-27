const express = require("express");
const app = express();
const port = 3000;

/*START ROUTING*/
// Default Channel
app.get("/", (req, res) => {
  res.sendFile('views/homePage.html', {root: __dirname })
});

// Home Page
app.get('/home', function(req, res) {
    res.sendFile('views/homePage.html', {root: __dirname })
});

//Communication with ESP
app.get('/testReq', function(req, res){
    res.send("Successfully pinged Project SafeGuard's Server! \n Current Status: ONLINE")
})
/*END ROUTING*/
app.listen(port, () => {
  console.log(`Capstone Server currently listening on ${port}.`);
});