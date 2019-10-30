import React, { useReducer } from 'react';
import './App.css';
import HomeForm from './components/HomeForm';
import { initialState } from '../src/initialstate.js';

function App() {
  const [ store, dispatch ] = useReducer(initialState);
  
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
      <HomeForm store={store} dispatch={dispatch} />
      </div>
  );
}

export default App;
