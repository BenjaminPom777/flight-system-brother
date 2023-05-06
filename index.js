const express = require('express')
const app = express();
const PORT = (process.env.NODE_ENV === 'development' ? 2000 : 3000);
const {getUserById,getUsers,connection} = require('./database/connection');
const {addTicket,getTicketById,getAllTickets} = require('./database/db_controllers/ticketsController');


app.get('/', (req, res) => {

    console.log(req)
    console.log(res)

    res.send('hello world')
})

app.get('/json', (req, res) => {
    res.json({ "name": "Beni" })
})

app.get('/users/:id', (req, res) => {
    getUserById(req.params.id)
        .then(user => {
            res.json(user);
        })
        .catch(err=>{
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.get('/users/', (req, res) => {
    getUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err=>{
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.get('/tickets/', (req, res) => {
    getAllTickets()
        .then(users => {
            res.json(users);
        })
        .catch(err=>{
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.post('/tickets/:flightId/:customerId', (req, res) => {
    // Extract the ticket data from the request parameters
    const flightId = req.params.flightId;
    const customerId = req.params.customerId;
  
    // // Generate a new ticket ID by incrementing the last ID in the array
    // const id = tickets.length > 0 ? tickets[tickets.length - 1].id + 1 : 1;
  
    // Create a new ticket object with the extracted data and generated ID
    addTicket(flightId,customerId)
        .then(results => {
            res.json(results);
        })
        .catch(err=>{
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
  });







app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})