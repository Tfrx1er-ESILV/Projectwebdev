const express = require('express')
const app = express()
const port = 3000

//app.use('*/css',express.static('./main.css'));
//app.use('*/js',express.static('./index.js'));
app.use(express.static('dist'));

app.use(function (req, res, next) {
    res.status(404).sendfile('./dist/404.html');
  })
  
app.listen(port, () => console.log(`Now go to http://localhost:${port}!`))