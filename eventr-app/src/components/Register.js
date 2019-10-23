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
                <div className="register">Register</div>
                <div className="login">Login</div>
            </div>
            <form>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="onSubmit">Create Event</button>
            </form>
        </div>
        );
    }
  }

export default Register;