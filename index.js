const express = require('express')
const app = express();
const PORT = (process.env.NODE_ENV === 'development' ? 2000 : 3000);
const { getUserById, getUsers } = require('./database/dataManagers/usersDataManager');
const { addTicket, getTicketById, getAllTickets } = require('./database/dataManagers/ticketsDataManager');
const { addFlight, updateFlight } = require('./database/dataManagers/flightsDataManager');
const bodyParser = require('body-parser');
// Parse JSON request body
app.use(bodyParser.json());



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
        .catch(err => {
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.get('/users/', (req, res) => {
    getUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.get('/tickets/', (req, res) => {
    getAllTickets()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})

app.post('/tickets/', (req, res) => {
    console.log(req.body);
    // Extract the ticket data from the request parameters
    const flightId = req.body.flightId;
    const customerId = req.body.customerId;

    // Create a new ticket object with the extracted data and generated ID
    addTicket(flightId, customerId)
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
});

app.post('/flights', async (req, res) => {
    console.log(req.body);
    // Extract the ticket data from the request parameters
    const flight = req.body;
    try {
        const flightIds = await addFlight(flight)
        if (flightIds.length > 0) {
            return res.json({ createdFlights: flightIds })
        }
    } catch (error) {
        return res.status(500).send(error)
    }
})


app.put('/flights/:id', async (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    if (!id) {
        return res.status(400).send("No id provided")
    }

    const data = req.body;
    try {
        const updateFlightsResponse = await updateFlight(data, id)
  
            return res.json({updated_rows : updateFlightsResponse})
        
    } catch (error) {
        return res.status(500).send(error)
    }
})






app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})