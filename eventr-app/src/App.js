import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

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
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
