// requring and configuring the dotenv module for the enviromemt variable 
require("dotenv").config();


// requiring the neccessary module and function 
const express = require("express");
const ejs = require("ejs")
const connectDB = require("./db");


// creating a instance of the Express application 
const app = express();
app.use(express.json());


// setting the port of the server with a default value of 3000
const PORT = process.env.PORT;


// connecting to the server
connectDB();


// Setting the express middleware for the form data handle
app.use(express.urlencoded({ extended: true }));


// serving the static files to the server
app.use(express.static("public"));



// setting the view engine ejs for dynamic serveing of the html
app.set("view engine", "ejs");



// 
app.use("/api/auth", require("./Auth/route"));



//  GET' s Route
app.get("/", (req, res) => {
    res.render("index");
});



app.get("/p2", (req, res) => {
    res.render("p2");
});

app.get("/login", (req, res) => {
    res.render("login");
});


app.get("/mainsite", (req, res) => {
    res.render("mainsite");
});


app.get("/friends", (req, res) => {
    res.render("friends");
});

app.get("/community", (req, res) => {
    res.render("community");
});


app.get("/events", (req, res) => {
    res.render("events");
});


app.get("/index", (req, res) => {
    res.render("index");
});


// POST's Route

app.post("/", (req, res) => {
    res.redirect("login");
})

app.post("/login", (req, res) => {
    res.redirect("p2");
});

app.post("/p2", (req, res) => {
    res.redirect("mainsite");
});



// Handle the 404 errors with a custom template
app.use((req, res) => {
    res.status(404).render("404");
});




// listen to the port  for starting the server

const server = app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
});

// handling the unhandledRejection

process.on("unhandledRejection", (err) => {
    console.log(`An Error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});