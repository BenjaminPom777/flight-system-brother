const { connection } = require("../connection");
const { knex } = require("../connection");
const Ticket = require("../../model/Ticket");

//deprecated not used. ILIA
const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM tickets`, function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

const getTickets = async (id) => {
  let tickets;
  if (id) {
    tickets = await Ticket.findById(id);
  } else {
    tickets = await Ticket.findAll();
  }
  return tickets;
};

//ILIA Deprecated
// const getTicketById = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `SELECT * FROM tickets WHERE id = ?`, [id],
//       function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//         if (err) {
//           return reject(err)
//         }
//         return resolve(results)
//       }
//     );
//   })
// }

const addTicket = async (ticket) => {
  const data = await ticket.create();
  return data;
};


// const addTicket = (flightId, customerId) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `INSERT INTO tickets (Id, Flight_Id, Customer_Id)
//           SELECT (IFNULL(MAX(Id), 0) + 1), ?, ? FROM tickets;`, [flightId, customerId],
//       function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//         if (err) {
//           return reject(err)
//         }
//         return resolve(results)
//       }
//     );
//   })
// }

const removeTicket = async (ticket) => {
  const data = await Ticket.delete(ticket)
  return data;
};

module.exports = {
  addTicket,
  //  getTicketById,
  getAllTickets,
  getTickets,
  removeTicket
};

// getTicketById ()

// updateTicket ()
// removeTicket ()
