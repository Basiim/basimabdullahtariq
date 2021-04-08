const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));

app.get("/", function(req, res) {
    console.log("Index Loaded");
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log("Server is Live");
})