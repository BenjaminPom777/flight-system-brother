const express = require("express");
const router = express.Router();
const {
  addTicket,
  getTickets,
  removeTicket,
} = require("../controller/ticketsController");

router.get("/:id?", getTickets);
router.post("/", addTicket);
router.delete("/:id", removeTicket);

module.exports = router;
