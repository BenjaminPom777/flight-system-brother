//get the local properties for db connection
require("dotenv").config();
const mysql = require("mysql2");


const knex = require('knex').knex({
  client: 'mysql2',
  connection: {
    host : process.env.HOST,
    port : 3306,
    user : process.env.USER,
    password : process.env.PW,
    database : process.env.DATABASE
  }
});



// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PW,
});


module.exports = {
  connection,
  knex
};
