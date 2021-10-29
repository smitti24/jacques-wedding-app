const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/dist/jacques-wedding-app'));
app.use(cors());

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/jacques-wedding-app/index.html'));
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
});
