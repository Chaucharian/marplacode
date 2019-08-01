const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/dist';
//const path = require('path');
const port = process.env.PORT || 1234;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + '/index.html');
//  res.sendFile( path.join(__dirname, '/dist', 'index.html') );
});

app.use(express.static(path));
// app.use( express.static( path.join(__dirname, '/dist')) );
app.use('/', router);

app.listen(port, '0.0.0.0',() => console.log(`Serving UI at ${port}!`));
