import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            email: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form className="registerForm">
                <input type="text" name="firstname" placeholder="first name" onChange={this.changeHandler} />
                <input type="text" name="lastname" placeholder="last name" onChange={this.changeHandler} />
                <input type="text" name="email" placeholder="email" onChange={this.changeHandler}/>
                <input type="password" name="password"placeholder="password" onChange={this.changeHandler}/>
                <button type="onSubmit">Create Event</button>
            </form>
        );
    }
  }

export default Register;