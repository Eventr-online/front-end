import React, { useContext } from 'react';
import './App.css';
import HomeForm from './components/HomeForm';
import { Route, Switch, __RouterContext, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Step0 from './components/eventStepsComponents/Step0';
import Step1 from './components/eventStepsComponents/Step1';
import Step2 from './components/eventStepsComponents/Step2';


function App() {
  
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

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

        {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/eventcreate" component={Step0} />
            <Route exact path="/step1" component={Step1} />
            <Route exact path="/step2" component={Step2} />
          </Switch>
        </animated.div>
        ))} 
    </div>
  );
}

export default App;
