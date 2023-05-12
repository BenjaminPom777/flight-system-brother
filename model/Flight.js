class Flight {
    constructor(Airline_Id,Origin_Country_Id,Destination_Country_Id,Departure_Time, Landing_Time,Remaining_Tickets) {
        this.Airline_Id = Airline_Id || null;
        this.Origin_Country_Id = Origin_Country_Id || null;
        this.Destination_Country_Id = Destination_Country_Id || null;
        this.Departure_Time = Departure_Time || null;
        this.Landing_Time = Landing_Time || null;
        this.Remaining_Tickets = Remaining_Tickets || null;
    }
}

module.exports = Flight;


