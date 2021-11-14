import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import google from './../../../images/icons/google.png'
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Register from '../Register/Register';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { loginWithGoogle } = useAuth();

    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <Navigation></Navigation>
            <div className="login-container py-5 text-center">
                <div className="container  d-flex align-content-center">
                    <div className="login-form-container">
                        {
                            toggle ? <div>
                                <LoginForm></LoginForm>

                            </div>
                                :
                                <div>
                                    <Register ></Register>
                                </div>
                        }

                        {
                            toggle ? <p
                                className="me-auto ps-4"
                                onClick={() => setToggle(false)}
                                style={{ cursor: 'pointer', color: 'blue' }}>
                                <small>Don't Have Account ? click here</small>
                            </p>
                                :
                                <p
                                    className="me-auto ps-4"
                                    onClick={() => setToggle(true)}
                                    style={{ cursor: 'pointer', color: 'blue' }}>
                                    <small>Have Account ? click here</small>
                                </p>
                        }




                        <div>
                            <hr />
                            <p className="or">Or,</p>
                        </div>
                        <div onClick={loginWithGoogle} className="d-flex justify-content-between align-items-center mx-5 mb-5 google-login-container">
                            <img className="ms-5" style={{ width: 50, height: 50 }} src={google} alt="" />
                            <p className="me-5 pe-5 pt-3" >Login in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;