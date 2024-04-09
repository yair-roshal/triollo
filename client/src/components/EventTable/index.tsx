import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, makeStyles } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

interface Event {
  eventId: number;
  title: string;
  description: string;
  dateTime: string;
  location: string;
}

const mockEventData: Event[] = [
  {
    eventId: 1,
    title: 'Event 1',
    description: 'Description for Event 1',
    dateTime: '2024-04-10T12:00:00',
    location: 'Location 1'
  },
  {
    eventId: 2,
    title: 'Event 2',
    description: 'Description for Event 2',
    dateTime: '2024-04-11T14:00:00',
    location: 'Location 2'
  },
];

const EventTable: React.FC = () => {
  const [sortField, setSortField] = useState<keyof Event | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Event) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const renderSortArrow = (field: keyof Event) => {
    if (sortField === field) {
      return sortOrder === 'asc' ? <KeyboardArrowUp /> : <KeyboardArrowDown />;
    }
    return null;
  };

  const sortedData = [...mockEventData].sort((a, b) => {
    if (sortField) {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      }
    }
    return 0;
  });

  return (
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell onClick={() => handleSort('eventId')}>
            Event ID {renderSortArrow('eventId')}
          </TableCell>
          <TableCell onClick={() => handleSort('title')}>
            Title {renderSortArrow('title')}
          </TableCell>
          <TableCell onClick={() => handleSort('description')}>
            Description {renderSortArrow('description')}
          </TableCell>
          <TableCell onClick={() => handleSort('dateTime')}>
            Date and Time {renderSortArrow('dateTime')}
          </TableCell>
          <TableCell onClick={() => handleSort('location')}>
            Location {renderSortArrow('location')}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((event) => (
          <TableRow key={event.eventId}>
            <TableCell>{event.eventId}</TableCell>
            <TableCell>{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
            <TableCell>{event.dateTime}</TableCell>
            <TableCell>{event.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventTable;
