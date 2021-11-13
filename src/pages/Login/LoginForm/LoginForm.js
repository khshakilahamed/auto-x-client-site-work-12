import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const LoginForm = () => {
    const { loginUser } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleUserLogin = e => {
        loginUser(email, password);
        e.preventDefault();
    }
    return (
        <div>
            <h3 className="my-4 login-title text-center">Please, Login here</h3>
            <form onSubmit={handleUserLogin} className="login-form">
                <input onChange={handleEmailChange} type="email" name="" id="" placeholder="Email" />
                <input onChange={handlePasswordChange} type="password" name="" id="" placeholder="Password" />
                <button type="submit" className="regular-btn">Login</button>

            </form>
        </div>
    );
};

export default LoginForm;