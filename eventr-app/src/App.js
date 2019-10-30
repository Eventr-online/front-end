import React, { useReducer } from 'react';
import './App.css';
import HomeForm from './components/HomeForm';

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
      </div>
  );
}

export default App;
