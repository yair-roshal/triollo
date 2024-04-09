const EventsService = require("../services/events.service.js")

class EventsController {
  async getAllEvents(req, res) {
    const result = await EventsService.getAllEvents(req, res)

    if (result) return res.status(200).send(result)
    else return res.status(500).send({ message: "error-getEvents" })
  }
  //============================================
  async getEvent(req, res) {
    const result = await EventsService.getEvent(req, res)

    if (result) return res.status(200).send(result)
    else return res.status(500).send({ message: "error-getEvents" })
  }

  //============================================
  async createEvent(req, res) {
    const result = await EventsService.createEvent(req, res)

    if (result) return res.status(200).send(result)
    else return res.status(500).send({ message: "error-createEvent" })
  }

  //============================================

  async updateEvent(req, res) {
    const result = await EventsService.updateEvent(req, res)

    if (result) return res.status(200).send(result)
    else return res.status(500).send({ message: "error-updateEvent" })
  }

  //============================================

  async deleteEvent(req, res) {
    const result = await EventsService.deleteEvent(req, res)

    if (result) return res.status(200).send(result)
    else return res.status(500).send({ message: "error-deleteEvent" })
  }
}

module.exports = new EventsController()
