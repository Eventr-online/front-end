import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {   
        return (
        <div className="registerForm">
            <div className="switchLinks">
                <h2>Register</h2>
                <h2>Login</h2>
            </div>
            <form>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
            </form>
        </div>
        );
    }
  }

export default Register;