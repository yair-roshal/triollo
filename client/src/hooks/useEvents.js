import { useQuery } from 'react-query';
import axios from 'axios';

const fetchEvents = async () => {
  const response = await axios.get('http://localhost:5005/events');
  return response.data;
};

const useEvents = () => {
  return useQuery('events', fetchEvents);
};

export default useEvents;
