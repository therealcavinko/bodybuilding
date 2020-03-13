import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExercisePage from './pages/ExercisePage';
import './App.css';
//--------------------------------------------------------
const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/exercise" component={ExercisePage} />
      </Switch>
    </div>
  </Router>
);
//-------------------------------------------------------
export default App;