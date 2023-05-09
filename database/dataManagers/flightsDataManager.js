const { knex } = require('../connection')

// getAllFlights ()
// getFlightById ()
// addFlight ()
// updateFlight ()
// removeFlight ()
// *bonus: getFlightsByAirline ()


const addFlight = async (flight) => {
    const data = await knex('flights').insert(flight)
    return data;
}

const updateFlight = async (flight, id) => {
    const data = await knex('flights').update(flight).where("id", "=", id)
    return data;
}

// addFlight();

module.exports = {
    addFlight,
    updateFlight
}