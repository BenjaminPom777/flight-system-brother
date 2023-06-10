const { knex } = require("../database/connection");
class Flight {
    constructor(Airline_Id,Origin_Country_Id,Destination_Country_Id,Departure_Time, Landing_Time,Remaining_Tickets) {
        this.Airline_Id = Airline_Id || null;
        this.Origin_Country_Id = Origin_Country_Id || null;
        this.Destination_Country_Id = Destination_Country_Id || null;
        this.Departure_Time = Departure_Time || null;
        this.Landing_Time = Landing_Time || null;
        this.Remaining_Tickets = Remaining_Tickets || null;
    }


    static async delete(id, isCascade = false) {
        try {
          if(isCascade){
            await knex.transaction((async (trx) => {
              // Delete related tables first

              await trx('tickets').where({ Flight_Id: id }).del();
              // await trx('RelatedTable2').where({ FlightId: id }).del();
      
              // Delete the flight
              const result = await trx('Flights').where({ Id: id }).del();
      
              if (result > 0) {
                return id;
              } else {
                return false;
              }
            }))
          } else {
            
            const result = await knex('Flights').where({ Id: id }).del();
            if (result > 0) {
              return id;
            } else {
              return false;
            }
          }
        } catch (error) {
          throw new Error(`Failed to delete flight: ${error.message}`);
        }
      }
    
}



module.exports = Flight;


