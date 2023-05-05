// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'flight_system',
  password: 'admin1234'
});

const getUserByName = (name) => {
  // simple query
  connection.query(
    `SELECT * FROM customers WHERE First_Name = ?`, [name],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}


const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM customers WHERE id = ?`, [id],
      function (err, results, fields) {
        if (err) {
          return reject(err)
        }
        return resolve(results[0])
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  })
  // simple query
}


module.exports = {
  getUserById
}