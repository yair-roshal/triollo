const express = require("express");
const router = express.Router();
const EventsController = require("../controllers/events.controller.js");

router.route("/events/:id").get(EventsController.getEvents);
router.route("/events").post(EventsController.createEvent);
router.route("/events/:id").put(EventsController.updateEvent);
router.route("/events/:id").delete(EventsController.deleteEvent);

module.exports = router;
