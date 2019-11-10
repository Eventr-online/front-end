import React, { useReducer } from 'react';
import './App.css';
import HomeForm from './components/HomeForm';
import TypeOfEvent from './components/TypeOfEvent';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
        <Switch>
          <Route exact path="/" component={HomeForm} />
          <Route exact path="/login" component={HomeForm} />
        </Switch> 
        <Route exact path="/eventstart" component={TypeOfEvent} />
    </div>
  );
}

export default App;
