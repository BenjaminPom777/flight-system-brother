const { knex } = require('../connection')

// getAllFlights ()
// getFlightById ()
// addFlight ()
// updateFlight ()
// removeFlight ()
// *bonus: getFlightsByAirline ()

const getFlights = async (id) => {
    let data;
    if (id) {
        data = await knex('flights').select('*').where("Id", "=", id)
    } else {
        data = await knex('flights').select('*')
    }
    return data;
}


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
    updateFlight,
    getFlights
}