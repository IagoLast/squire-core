// Use this code in https://webtask.io to get your own server running.

var express = require('express');
var Webtask = require('webtask-tools');
var bodyParser = require('body-parser');
const squire = require('squire-badges-core');

var app = express();
app.use(bodyParser.json());

app.get('/:subject/:value/:color', function (req, res) {
  var { subject, value, color } = req.params;
  if (Number.parseInt(color)) {
    color = `#${color}`;
  }
  const svg = squire.generateBadge(subject, value, color);
  

  res.setHeader('content-type', 'image/svg+xml');
  res.send(200, svg);
});


module.exports = Webtask.fromExpress(app);
