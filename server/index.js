const express = require('express');
const path = require('path');
const dbQuery = require('../database/index.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

// handle Read all cows
app.get('/api/cows', (req, res) => {
  dbQuery.fetchCows((err, allCows) => {
    if (err) { console.log(err); }
    res.status(200).send(allCows);
  });

})

// handle Create a cow
app.post('/api/cows', (req, res) => {
  var cow = req.body;
  dbQuery.addCow(cow, (err, results) => {
    if (err) { console.log(err); }

    dbQuery.fetchCows((err, allCows) => {
      if (err) { console.log(err); }
      res.status(201).send(allCows);
    })

  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
