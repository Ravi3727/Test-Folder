const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let port = 3000;
app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})

app.get("/", (req,res)=> {
    res.render("home.ejs")
})

app.get("/login", (req,res)=> {
    res.send("This is login page");
})