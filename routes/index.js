const express = require("express");
const router = express.Router();

router.get("/explore", (req, res) => {
    
    res.redirect("/listings");
});

module.exports = router;
