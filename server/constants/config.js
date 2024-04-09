require("dotenv").config()
const path = require("path")
const fs = require("fs")

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
}

module.exports = { corsOptions }
