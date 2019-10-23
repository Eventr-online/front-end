import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/login.css';

function Login() {
  return (
    <div className="loginForm">
        <div className="switchLinks">
            <NavLink activeClassName="activeLink" exact to="/">Register</NavLink>
            <NavLink activeClassName="activeLink" exact to="/login">Login</NavLink>
        </div>
        <form>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <button type="onSubmit">Login</button>
        </form>
    </div>
    );
  }

export default Login;