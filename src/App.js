import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
const [loggedInUser, setLoggedInUser] = useState({name:""})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Name: {loggedInUser.name}</h1>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/login">
            <Login/>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
