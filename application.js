const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "img", "static")));
app.use("/static", express.static(path.resolve(__dirname, "js", "static")));
app.use("/static", express.static(path.resolve(__dirname, "css", "static")));
app.listen(3001);
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));