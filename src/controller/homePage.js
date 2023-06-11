const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render("home/home")
})

router.get('/sobre', (req, res) => {
    res.render("home/sobre")
})

router.get('/ajuda', (req, res) => {
    res.render("home/ajuda")
})

module.exports = router;
