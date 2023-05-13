const { knex } = require("../database/connection");

class Ticket {
  constructor(flightId, customerId, id) {
    this.id = id || null;
    this.flight_Id = flightId || null;
    this.customer_Id = customerId || null;
  }

  async create({ flightId, customerId }) {
    try {
      const [id] = await knex("Tickets").insert({
        Flight_Id: flightId,
        Customer_Id: customerId,
      });
      return new Ticket({ id, flightId, customerId });
    } catch (error) {
      throw new Error(`Failed to create ticket: ${error.message}`);
    }
  }

  async create() {
    try {
      console.log(this);
      const [id] = await knex("Tickets").insert(this);
      return id;
    } catch (error) {
      throw new Error(`Failed to create ticket: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const result = await knex("Tickets").select().where({ Id: id }).limit(1);
      if (result.length > 0) {
        const { Id, Flight_Id, Customer_Id } = result[0];
        return new Ticket(Flight_Id, Customer_Id, Id);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Failed to find ticket by ID: ${error.message}`);
    }
  }

  static async findAll() {
    try {
      const results = await knex("Tickets").select();
      return results.map(
        (row) => new Ticket(row.Flight_Id, row.Customer_Id, row.Id)
      );
    } catch (error) {
      throw new Error(`Failed to find all tickets: ${error.message}`);
    }
  }



static async delete(id) {
    try {
      const result = await knex('Tickets').where({ Id: id }).del();
      if (result > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`Failed to delete ticket: ${error.message}`);
    }
  }


}

module.exports = Ticket;
