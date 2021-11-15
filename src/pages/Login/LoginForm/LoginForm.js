import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const LoginForm = () => {
    const { loginUser, error } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();



    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleUserLogin = e => {
        loginUser(email, password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <h3 className="my-4 login-title text-center">Please, Login here</h3>
            <form onSubmit={handleUserLogin} className="login-form">
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Email" />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Password" />
                {
                    error && <div className="alert alert-danger my-0" role="alert">
                        {error}
                    </div>
                }
                <button type="submit" className="regular-btn">Login</button>

            </form>
        </div>
    );
};

export default LoginForm;