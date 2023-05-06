//get the local properties for db connection
require('dotenv').config()
// get the client
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PW
});

const getUsers = () => {
  return new Promise((resolve, reject) => {
  connection.query(
    `SELECT * FROM customers`,
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      if (err) {
        return reject(err)
      }
      return resolve(results)
    }
  );
  })
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
  getUserById,getUsers,connection
}