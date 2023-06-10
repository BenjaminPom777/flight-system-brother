const Flight = require("../../model/Flight");
const { knex } = require("../connection");

// getAllFlights ()
// getFlightById ()
// addFlight ()
// updateFlight ()
// removeFlight ()
// *bonus: getFlightsByAirline ()

const getFlights = async (id) => {
  let data;
  if (id) {
    data = await knex("flights").select("*").where("Id", "=", id);
  } else {
    data = await knex("flights").select("*");
  }
  return data;
};

const getPresentationFlights = async (id) => {
  let data;
  if (id) {
    data = await knex("flights").select("*").where("Id", "=", id);
  } else {
    const data = knex("flights")
      .select("*")
      .join(
        `flights
            on flights.Origin_Country_Id=countries.id`
      )
      .join(`countries c2 on flights.Destination_Country_Id = c2.id`);
    // data = await knex.queryBuilder(`select * from countries join flights
    //     on flights.Origin_Country_Id=countries.id
    //     join countries c2 on flights.Destination_Country_Id = c2.id`);
    console.log(data);
    // data = await knex('flights').select('*')
  }
  return data;
};

const addFlight = async (flight) => {
  const data = await knex("flights").insert(flight);
  return data;
};

const updateFlight = async (flight, id) => {
  const data = await knex("flights").update(flight).where("id", "=", id);
  return data;
};

const deleteFlight = async(id)=> {
    const data = await Flight.delete(id, true)
    return data;
}

// addFlight();

module.exports = {
  addFlight,
  updateFlight,
  getFlights,
  getPresentationFlights,
  deleteFlight,
};
