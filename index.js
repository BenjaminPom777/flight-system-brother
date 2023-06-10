// MVC

const express = require("express");
const app = express();
const PORT = process.env.NODE_ENV === "development" ? 2000 : 3000;
const {
  getUserById,
  getUsers,
} = require("./database/dataManagers/usersDataManager");
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "web/views"));
app.use(express.static("public"));

const flightsRouter = require("./web/router/flightsRouter");
const ticketsRouter = require("./web/router/ticketsRouter");
const airlinesRouter = require("./web/router/airlinesRouter");

const {
  getFlights,
  getPresentationFlights,
} = require("./database/dataManagers/flightsDataManager");
// const {getAllFlights} = require('./web/controller/flightsController')

app.get("/flights", async (req, res) => {
  try {
    const flightsJson = await getFlights();
    // createPresentationFlights(flightsJson)
    // console.log("flightsJson: ", flightsJson);

    return res.render("flights", { flights: flightsJson });
    // getPresentationFlights();
  } catch (error) {
    return res.status(500).send(error);
  }
});

const createPresentationFlights = (jsonObjs) => {
  const flightsPresntation = [];
  jsonObjs.forEach((element) => {});
};

const authMiddleware = (req, res, next) => {
  //We checking if the user and password and token and something
  // i no remember atm and I know that the user is ILIA and he is authorized
  if (true) {
    //authenticated
    req.authenticatedUsername = "Ilia";
    console.log("first middleware has been called");
    return next();
  } else {
    res.redirect("/login");
  }
};

app.get("/logoin", () => {
  //we should return view with login
});

app.use("/json", authMiddleware);

app.get("/json", (req, res) => {
  console.log(req.authenticatedUsername);
  res.json({ name: "Beni" });
});

app.get("/users/:id", (req, res, next) => {
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

app.use("/api/flights", flightsRouter);
app.use("/api/tickets", ticketsRouter);
app.use("/api/airlines", airlinesRouter);

// app.use('/api/airlines', (req, res, next) => {
//   console.log('this should be logged after api/airlines next() has been called ')
//   next('hello world')
// })
// app.get('/flights', getAllFlights)
// app.get('/flights/:id', getFlightById)
// app.post('/flights', postFlight)
// app.put('/flights/:id', putFlight)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
