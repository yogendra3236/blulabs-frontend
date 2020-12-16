import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Login from "../components/Login";
import GetLocations from '../components/GetLocations';
import Booking from '../components/Booking';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={GetLocations} />
        <PrivateRoute path="/booking" exact component={Booking} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
