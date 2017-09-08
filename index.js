const express = require('express'),
    app = express();


app.get("/", (req, res) => {
  res.send("Hello world 2.0!");
});


app.listen(5000, () =>{
  console.log("Port 5000");
});
