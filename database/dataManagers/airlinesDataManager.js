const { knex } = require('../connection');
const Airline = require("../../model/Airline");


  async function getAirlineById(id) {
    const airline = await knex('Airlines')
      .where({ id: id })
      .first();

    if (!airline) {
      throw new Error('Airline not found');
    }

    return new Airline(airline.Id, airline.Name, airline.Country_Id);
  }

  async function getAirlines() {
    const airlines = await knex('airlines').select('*')
    

    return airlines.map((airline) => new Airline(airline.Id, airline.Name, airline.Country_Id));
  }

 async function createAirline(name, countryId) {
    const [id] = await knex('Airlines').insert({
      Name: name,
      Country_Id: countryId,
    });

    return new Airline(id, name, countryId);
  }

  async function updateAirline(airline) {
    const rowsUpdated = await knex('Airlines')
      .where({ id: airline.id })
      .update({
        Name: airline.name,
        Country_Id: airline.countryId,
      });

    if (rowsUpdated === 0) {
      throw new Error('Airline not found');
    }
  }

  async function deleteAirline(airline) {
    const rowsDeleted = await knex('Airlines').where({ id: airline.id }).del();

    if (rowsDeleted === 0) {
      throw new Error('Airline not found');
    }
    return rowsDeleted
  }


module.exports = {
    getAirlineById,
    getAirlines,
    createAirline,
    updateAirline,
    deleteAirline
};
// module.exports = Airline;