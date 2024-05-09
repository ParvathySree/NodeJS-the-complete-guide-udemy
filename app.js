const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')


const rootDir = require('./utils/path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'))
})

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})