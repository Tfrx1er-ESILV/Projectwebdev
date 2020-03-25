const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//app.use('*/css',express.static('./main.css'));
//app.use('*/js',express.static('./index.js'));
app.use(express.static(path.resolve(__dirname,'../client/dist')));

app.use(function (req, res, next) {
    res.status(404).sendFile(path.resolve(__dirname,'../client/dist/404.html'));
  })
  
app.listen(port, () => console.log(`Now go to http://localhost:${port}`))