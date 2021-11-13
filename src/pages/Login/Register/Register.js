import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { registerUser } = useFirebase();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const createNewUser = e => {
        registerUser(name, email, password);

        e.preventDefault();
    }

    return (
        <div>
            <h3 className="my-4 login-title text-center">Please, Register here</h3>
            <form onSubmit={createNewUser} className="login-form">
                <input onChange={handleNameChange} type="text" name="" id="" placeholder="Name" />
                <input onChange={handleEmailChange} type="email" name="" id="" placeholder="Email" />
                <input onChange={handlePasswordChange} type="password" name="" id="" placeholder="Password" />
                <button type="submit" className="regular-btn">Register</button>
            </form>
        </div>
    );
};

export default Register;