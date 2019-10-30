import React, { useState } from 'react';
import '../css/register.css';

function Register() {
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
  
    return (
        <form className="registerForm">
            <input type="text" placeholder="first name" value={firstname} />
            <input type="text" placeholder="last name" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="onSubmit">Create Event</button>
        </form>
    );
  }

export default Register;