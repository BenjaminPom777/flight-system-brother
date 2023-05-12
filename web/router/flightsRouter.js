const express = require('express')
const router = express.Router()
const { getAllFlights, getFlightById, postFlight, putFlight } = require('../controller/flightsController')


router.get('/', getAllFlights)
router.get('/:id', getFlightById)
router.post('/', postFlight)
router.put('/:id', putFlight)


module.exports = router;