// const {
//     getTickets: dMGetTickets,
//     removeTicket: dMRemoveTicket,
//     addTicket: dMAddTicket,
//   } = require("../../database/dataManagers/ticketsDataManager");
const Airline = require("../../model/Airline");
const airlineDataManager = require('../../database/dataManagers/airlinesDataManager');

const getAirlineById =  async (req, res, next) => {
  try {
    const airline = await airlineDataManager.getAirlineById(req.params.id);
    res.json(airline);
  } catch (error) {
    res.code(error);
  }
};



const getAirlines = async (request1, ilia, beni) => {
  try {

    const airlines = await airlineDataManager.getAirlines();
    ilia.json(airlines);
  } catch (error) {
    beni(error);
    // next(error);
  }
};

const createAirline = async (req, res, next) => {
  try {
    const { Name, Country_Id } = req.body;
    const newAirline = await airlineDataManager.createAirline(Name, Country_Id);
    if (newAirline) {
        res.status(201).json(newAirline);
    }
  } catch (error) {
    next(error);
  }
};

const  updateAirline = async (req, res, next) => {
  try {
    const airline = new Airline(req.params.id, req.body.Name, req.body.Country_Id);
    await airlineDataManager.updateAirline(airline);
    res.status(201).json(airline);
  } catch (error) {
    next(error);
  }
};

const deleteAirline =  async (req, res, next) => {
  try {
    const airline = new Airline(req.params.id);
    await airlineFunctions.deleteAirline(airline);
    res.status(201).json(airline);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAirlineById,
    getAirlines,
    createAirline,
    updateAirline,
    deleteAirline
};