const express = require("express");





const checksum_lib=require("./Paytm/checksum");
const config=require("./Paytm/config");

const app = express();

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });



const PORT = process.env.PORT || 4000;
const routing = require("./router/index");

app.use(routing);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });


app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});