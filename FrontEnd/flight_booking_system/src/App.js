import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import LoginComponent from "./pages/LoginComponent";
import LoginComponent from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import HomePage from './pages/HomePage';
import TicketHistory from './pages/Ticket/TicketHistory';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route exact path = {"/"}  component = {HomePage}/>
            <Route exact path = {"/login"}  component = {LoginComponent}/>
            <Route exact path = {"/registration"}  component = {Registration}/>
            <Route exact path = {"/ticket"} component = {TicketHistory} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
