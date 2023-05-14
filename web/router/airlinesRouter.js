const express = require('express')
const router = express.Router()

const airlineFunctions = require('../controller/airlinesController');
//const { getAllFlights, getFlightById, postFlight, putFlight } = require('../controller/flightsController')


router.get('/', airlineFunctions.getAirlines)
router.get('/:id', airlineFunctions.getAirlineById)
router.post('/', airlineFunctions.createAirline)
router.put('/:id', airlineFunctions.updateAirline)
router.delete('/:id', airlineFunctions.deleteAirline)


module.exports = router;