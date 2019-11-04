import React, { useReducer } from 'react';
import './App.css';
import HomeForm from './components/HomeForm';
import TypeOfEvent from './components/TypeOfEvent';
import { Route, Switch, withRouter } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <div className="mainNav">
        <h1 className="eventrLogo">eventr</h1>
        <nav>
          <a href="#">Account</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <HomeForm />
      <Route exact path="/eventstart" component={TypeOfEvent} />
      </div>
  );
}

export default App;
