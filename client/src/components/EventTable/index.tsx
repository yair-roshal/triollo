import React, { useState, useEffect } from "react"
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material"

interface Event {
  eventId: number
  title: string
  description: string
  date_time: string
  location: string
}

const EventTable: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [sortField, setSortField] = useState<keyof Event | null>(null)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const handleSort = (field: keyof Event) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const renderSortArrow = (field: keyof Event) => {
    if (sortField === field) {
      return sortOrder === "asc" ? <KeyboardArrowUp /> : <KeyboardArrowDown />
    }
    return null
  }

  useEffect(() => {
    fetch("http://localhost:5005/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error))
  }, [])

  const sortedData = [...events].sort((a, b) => {
    if (sortField) {
      const aValue = a[sortField]
      const bValue = b[sortField]
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0
      }
    }
    return 0
  })

  return (
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell onClick={() => handleSort("eventId")}>
            Event ID {renderSortArrow("eventId")}
          </TableCell>
          <TableCell onClick={() => handleSort("title")}>
            Title {renderSortArrow("title")}
          </TableCell>
          <TableCell onClick={() => handleSort("description")}>
            Description {renderSortArrow("description")}
          </TableCell>
          <TableCell onClick={() => handleSort("date_time")}>
            Date and Time {renderSortArrow("date_time")}
          </TableCell>
          <TableCell onClick={() => handleSort("location")}>
            Location {renderSortArrow("location")}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((event) => (
          <TableRow key={event.eventId}>
            <TableCell>{event.eventId}</TableCell>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
            <TableCell>{event.date_time}</TableCell>
            <TableCell>{event.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EventTable
