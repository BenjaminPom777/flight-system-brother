const { addFlight, updateFlight, getFlights } = require('../../database/dataManagers/flightsDataManager');
const Flight = require('../../model/Flight')

const getAllFlights = async (req, res) => {
    try {
        const flights = await getFlights()
        return res.json({ flights })

    } catch (error) {    
        return res.status(500).send(error)
    }
}

const getFlightById = async (req, res) => {
    const id = req.params.id;
    try {
        const flights = await getFlights(id)
        return res.json({ flights })
    } catch (error) {
        return res.status(500).send(error)
    }
}

const postFlight = async (req, res) => {
    const { Airline_Id, Origin_Country_Id, Destination_Country_Id, Departure_Time, Landing_Time, Remaining_Tickets } = req.body;
    const flight = new Flight(Airline_Id, Origin_Country_Id, Destination_Country_Id, Departure_Time, Landing_Time, Remaining_Tickets)

    try {
        const flightIds = await addFlight(flight)
        if (flightIds.length > 0) {
            return res.json({ createdFlights: flightIds })
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

const putFlight = async (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    if (!id) {
        return res.status(400).send("No id provided")
    }

    const data = req.body;
    try {
        const updateFlightsResponse = await updateFlight(data, id)

        return res.json({ updated_rows: updateFlightsResponse })

    } catch (error) {
        return res.status(500).send(error)
    }
}



module.exports = {
    getAllFlights,
    getFlightById,
    postFlight,
    putFlight
}