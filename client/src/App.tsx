import React from 'react';
import { ListUsersProvider } from './context/listUsersContext';
import Header from './components/Header';
import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <ListUsersProvider>
      <Header />
      <Routes />
    </ListUsersProvider>
  );
};

export default App;