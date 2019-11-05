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
      <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={3000}
                classNames="fade"
            >
                <Switch location={location}>
                  <Switch>
                    <Route exact path="/" component={HomeForm} />
                    <Route exact path="/login" component={HomeForm} />
                  </Switch> 
                  <Route exact path="/eventstart" component={TypeOfEvent} />
                </Switch>  
            </CSSTransition>   
          </TransitionGroup>   
       )} />
    </div>
  );
}

export default App;
