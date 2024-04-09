import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import UserList from '../components/UserList';
// import UserModal from '../components/UserModal'
import EventTable from '../components/EventTable'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <UserList/> */}
      <EventTable/>
      {/* <Switch>
        <Route path="/:id" component={UserModal}/>
      </Switch> */}
    </BrowserRouter>
  );
}

export default Routes;