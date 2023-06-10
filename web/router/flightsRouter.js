const express = require('express')
const router = express.Router()
const { getAllFlights, getFlightById, postFlight, putFlight,removeFlight } = require('../controller/flightsController')


router.get('/', getAllFlights)
router.get('/:id', getFlightById)
router.post('/', postFlight)
router.put('/:id', putFlight)
router.delete('/:id',removeFlight )

module.exports = router;