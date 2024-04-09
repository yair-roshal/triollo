import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const useEventData = () => {
  const [pageNumber, setPageNumber] = useState(1); // Example state for pagination

  const fetchEvents = async (page) => {
    const formData = new FormData();
    // Add any form data if needed

    try {
      const response = await axios.get(`http://localhost:5005/events?page=${page}`, {
        // You can add any additional configurations here
        // For example, headers or authentication tokens
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch events');
    }
  };

  // Using react-query to cache the API response
  const { data, isLoading, isError } = useQuery(['events', pageNumber], () => fetchEvents(pageNumber), {
    // Cache the data for a certain time (e.g., 5 minutes)
    staleTime: 300000,
  });

  return {
    events: data,
    isLoading,
    isError,
    setPageNumber,
  };
};

export default useEventData;
