const {
  getTickets: dMGetTickets,
  removeTicket: dMRemoveTicket,
  addTicket: dMAddTicket,
} = require("../../database/dataManagers/ticketsDataManager");
const Ticket = require("../../model/Ticket");



const getTickets = async (req, res) => {
  const id = req.params.id;
  let tickets;
  try {
    tickets =  await dMGetTickets(id)
    return res.json(tickets);
  } catch (error) {
    return res.status(500).send(`Something went wrong, err: ${error}`);
  }
};

const addTicket = async (req, res) => {
    console.log(req.body);
    // Extract the ticket data from the request parameters
    const flightId = req.body.flightId;
    const customerId = req.body.customerId;
    const ticket = new Ticket(flightId, customerId);
    try {
      const result = await dMAddTicket(ticket);
      return res.json(result);
    } catch (err) {
      res.status(500).send(`Something went wrong, err: ${err}`);
    }
  }

  const removeTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const removed = await dMRemoveTicket(id)
        return res.json({ removed })
    } catch (error) {
        return res.status(500).send(error)
    }
}




//ILIA EXAMPLE of using regular knex without class.
 // app.get("/tickets3/:id?", async (req, res) => {
//   const id = req.params.id;
//   let tickets;
//   try {
//     if (id) {
//       tickets = await Ticket.findById(id);
//     } else {
//       tickets = await Ticket.findAll();
//     }
//     return res.json(tickets);
//   } catch (error) {
//     return res.status(500).send(`Something went wrong, err: ${error}`);
//   }
// });



  module.exports =  {
    addTicket,
    getTickets,
    removeTicket
  };