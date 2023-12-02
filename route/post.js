const express = require("express");
const router = express.Router();


router.post("", (req, res) => {
    res.redirect("login");
})

router.post("/login", (req, res) => {
    res.redirect("p2");
});

router.post("/p2", (req, res) => {
    res.redirect("mainsite");
});

module.exports = router;