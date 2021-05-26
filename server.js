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
app.get("/.well-known/pki-validation/47C4506955AE6D89F1CFEC9BB5211974.txt", function(req, res) {
    res.sendFile(__dirname + "/.well-known/pki-validation/47C4506955AE6D89F1CFEC9BB5211974.txt")
})
app.listen(port, function() {
    console.log("Server is Live");
})