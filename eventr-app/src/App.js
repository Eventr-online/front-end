import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
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
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>    
      </div>
  );
}

export default App;
