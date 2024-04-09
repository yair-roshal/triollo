const mysql = require("mysql2/promise")
const { sqlConfig } = require("../constants/sqlConfig")

class EventsService {
  constructor() {
    this.pool = mysql.createPool(sqlConfig)
  }

  async executeQuery(sqlQuery, values) {
    const connection = await this.pool.getConnection()

    try {
      const [results] = await connection.execute(sqlQuery, values)
      return results
    } catch (error) {
      console.error("Error executing SQL query:", error)
      throw error
    } finally {
      connection.release()
    }
  }

  // getAllEvents ================================================
  async getAllEvents() {
    const sqlQuery = `
      SELECT
        id,
        title,
        description,
        date_time,
        location
      FROM events
    `
    try {
      const results = await this.executeQuery(sqlQuery, [])
      return results
    } catch (error) {
      console.error("Error getting all events:", error)
      throw error
    }
  }

  // getEvent ================================================
  async getEvent(eventId) {
    const sqlQuery = `
      SELECT
        id,
        title,
        description,
        date_time,
        location
      FROM events
      WHERE id = ?
    `
    return this.executeQuery(sqlQuery, [eventId])
  }

  // createEvent ================================================
  async createEvent(eventData) {
    console.log("eventData.body :>> ", eventData.body)
    const { title, description, date_time, location } = eventData.body
    
    console.log("{ title, description, date_time, location }>> ", { title, description, date_time, location })

    const sqlQuery = `
        INSERT INTO events (title, description, date_time, location)
        VALUES (?, ?, ?, ?)
      `

    try {
      const result = await this.executeQuery(sqlQuery, [
        title || null,
        description || null,
        date_time || null,
        location || null,
      ])
      return result
    } catch (error) {
      console.error("Error creating event:", error)
      throw error
    }
  }

  // updateEvent ================================================
  async updateEvent(eventId, eventData) {
    const { title, description, date_time, location } = eventData
    const sqlQuery = `
      UPDATE events
      SET title = ?, description = ?, date_time = ?, location = ?
      WHERE id = ?
    `

    try {
      const result = await this.executeQuery(sqlQuery, [
        title,
        description,
        date_time,
        location,
        eventId,
      ])
      return result
    } catch (error) {
      console.error("Error updating event:", error)
      throw error
    }
  }

  // deleteEvent ================================================
  async deleteEvent(eventId) {
    const sqlQuery = `
      DELETE FROM events
      WHERE id = ?
    `

    try {
      const result = await this.executeQuery(sqlQuery, [eventId])
      return result
    } catch (error) {
      console.error("Error deleting event:", error)
      throw error
    }
  }
}

module.exports = new EventsService()
