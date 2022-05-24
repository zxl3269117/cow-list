const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// fetch All cows
exports.fetchCows = (callback) => {
  var queryStr = 'SELECT * FROM cowsList';
  connection.query(queryStr, (err, results, fields) => {
    if (err) { callback(err, null) }
    console.log(results);
    callback(null, results);
  })
};

// insert a cow (does NOT check duplicates)
exports.addCow = (cowData, callback) => {
  var queryStr = 'INSERT INTO cowsList (name, description) VALUES (?, ?)';
  // console.log('cowData', cowData);
  // var name = cowData.name;
  // var description = cowData.description;
  var values = [cowData.name, cowData.description];
  connection.query(queryStr, values, (err, results, fields) => {
    if (err) { callback(err, null); }
    // console.log(results);
    callback(null, results);
  })

};