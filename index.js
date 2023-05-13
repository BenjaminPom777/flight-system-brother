// MVC

const express = require("express");
const app = express();
const PORT = process.env.NODE_ENV === "development" ? 2000 : 3000;
const {
  getUserById,
  getUsers,
} = require("./database/dataManagers/usersDataManager")


const {
  addTicket,
  getTickets,
  removeTicket
} = require("./web/controller/ticketsController")
const flightsRouter = require("./web/router/flightsRouter")
const ticketsRouter = require("./web/router/ticketsRouter");
const Ticket = require("./model/Ticket");

const bodyParser = require("body-parser");
// Parse JSON request body
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);

  res.send("hello world");
});

app.get("/json", (req, res) => {
  res.json({ name: "Beni" });
});

app.get("/users/:id", (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(`Something went wrong, err: ${err}`);
    });
});

app.get("/users/", (req, res) => {
  getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).send(`Something went wrong, err: ${err}`);
    });
});

// app.get("/tickets/", getTickets);
// app.get("/tickets/:id?", getTickets);
// app.post("/tickets/", addTicket);
// app.delete("/tickets/:id", removeTicket);

app.use("/flights", flightsRouter);
app.use("/tickets", ticketsRouter);
// app.get('/flights', getAllFlights)
// app.get('/flights/:id', getFlightById)
// app.post('/flights', postFlight)
// app.put('/flights/:id', putFlight)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
