const Main = require('../models/main.js')
const express = require('express')
const router = express.Router()


router.get('/', (req, res)=> {
  res.render('index.html')
})

module.exports = router;
