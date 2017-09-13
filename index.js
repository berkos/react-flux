const express = require('express'),
    mongoose = require('mongoose'),
    app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do', (err) => {
  err && console.error(err);
});
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  //res.send("Hello world 2.0!");
  res.render('blank', {
    title: "Mastering Flux",
    body: "Hello world 3.1"
  })
});


app.listen(5000, () =>{
  console.log("Port 5000");
});
