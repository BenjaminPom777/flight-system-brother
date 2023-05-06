const {connection} = require('../connection');


const getAllTickets = ()=> {
    return new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM tickets`,
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

const getTicketById = (id)=> {
    return new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM tickets WHERE id = ?`, [id],
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

const addTicket = (flightId, customerId)=> {
    return new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO tickets (Id, Flight_Id, Customer_Id)
          SELECT (IFNULL(MAX(Id), 0) + 1), ?, ? FROM tickets;`, [flightId, customerId],
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


module.exports = {
    addTicket,getTicketById,getAllTickets
  }


// getTicketById ()

// updateTicket ()
// removeTicket ()
