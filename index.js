const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
//   res.send("Hi there! Welcome to the home of Project SafeGuard");
  res.sendFile('views/homePage.html', {root: __dirname })
//   res.redirect('views/homePage,html', {root: __dirname});
});
app.get('/home', function(req, res) {
    res.sendFile('views/homePage.html', {root: __dirname })
});

app.listen(port, () => {
  console.log(`Capstone Server currently listening on ${port}.`);
});