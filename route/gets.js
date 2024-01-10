const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.render("index");
});

router.get("/p2", (req, res) => {
    res.render("p2");
});

router.get("/login", (req, res) => {
    res.render("login");
});


router.get("/mainsite", (req, res) => {
    res.render("mainsite");
});


router.get("/friends", (req, res) => {
    res.render("friends");
});

router.get("/community", (req, res) => {
    res.render("community");
});


router.get("/events", (req, res) => {
    res.render("events");
});


router.get("/password", (req, res) =>{
    res.render("password")
})


router.get("/signout", (req, res) => {
    res.render("signout");
})

router.get("/last", (req, res) => {
    res.render("last");
})



module.exports = router;