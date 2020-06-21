import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import LoginComponent from "./pages/LoginComponent";
import LoginComponent from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import HomePage from './pages/HomePage';
import TicketHistory from './pages/Ticket/TicketHistory';
import DashBoard from './pages/DashBoard/index';
import SearchFlight from './pages/TicketBooking/SearchFlight';
import BookedFlightDetails from './pages/PaymentService/BookedFlightDetails';
import PaymentForm from './pages/PaymentService/PaymentForm';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route exact path = {"/"}  component = {DashBoard}/>
            <Route exact path = {"/login"}  component = {LoginComponent}/>
            <Route exact path = {"/registration"}  component = {Registration}/>
            <Route exact path = {"/ticket"} component = {TicketHistory} />
            <Route exact path = {"/search"} component = {SearchFlight} />
            <Route exact path = {"/bookedFlight"} component = {BookedFlightDetails}/>
            <Route exact path = {"/creditCard"} component = {PaymentForm} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
