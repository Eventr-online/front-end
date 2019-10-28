import React from 'react';
import './App.css';
import HomeForm from './components/HomeForm';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }})
  
  return (
    <div className="App">
      <div className="mainNav">
        <animated.div style={props}>
          <h1 className="eventrLogo">eventr</h1>
        </animated.div>
        <nav>
          <a href="#">Account</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <HomeForm />
      </div>
  );
}

export default App;
