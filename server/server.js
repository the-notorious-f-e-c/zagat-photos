const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/schema.js');

const port = 2001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/photos', (req, res) => {
  db.getPhotos(req.body.id, (err, urls) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(urls);
    }
  });
});

app.listen(port, console.log('listening on port', port));
