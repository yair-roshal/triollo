import React from 'react';
import { ListUsersProvider } from './context/listUsersContext';
import EventTable from './components/EventTable';
import Header from './components/Header';
import Footer from './components/Footer';
// import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <ListUsersProvider>
      <Header />
      {/* <Routes /> */}
      <EventTable/>
      <Footer />

    </ListUsersProvider>
  );
};

export default App;