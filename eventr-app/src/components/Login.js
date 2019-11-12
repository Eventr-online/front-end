import React, { Component } from 'react';
import '../css/login.css';

function Login() {
  return (
        <form className="loginForm">
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <button type="onSubmit">Login</button>
        </form>
    );
  }

export default Login;