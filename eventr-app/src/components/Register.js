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
            <form className="registerForm">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="onSubmit">Create Event</button>
            </form>
        );
    }
  }

export default Register;