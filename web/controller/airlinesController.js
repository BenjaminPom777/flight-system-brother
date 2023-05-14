// const {
//     getTickets: dMGetTickets,
//     removeTicket: dMRemoveTicket,
//     addTicket: dMAddTicket,
//   } = require("../../database/dataManagers/ticketsDataManager");
const Airline = require("../../model/Airline");
const airlineFunctions = require('../../database/dataManagers/airlinesDataManager');

const getAirlineById =  async (req, res, next) => {
  try {
    const airline = await airlineFunctions.getAirlineById(req.params.id);
    res.json(airline);
  } catch (error) {
    next(error);
  }
};

const getAirlines = async (req, res, next) => {
  try {
    const airlines = await airlineFunctions.getAirlines();
    res.json(airlines);
  } catch (error) {
    next(error);
  }
};

const createAirline = async (req, res, next) => {
  try {
    const { Name, Country_Id } = req.body;
    const newAirline = await airlineFunctions.createAirline(Name, Country_Id);
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
    await airlineFunctions.updateAirline(airline);
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