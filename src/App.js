import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/dashboard">
          <Dashboard/>
        </Route>

        <Route path="*">
            <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;