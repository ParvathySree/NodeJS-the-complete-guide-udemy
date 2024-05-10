const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../utils/path')
const products = require('./admin')

router.get('/',(req,res,next) => {
    // console.log('shop.js',products)
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    res.render('shop')
})


module.exports = router;
