import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from '../assets/image/google-icon.png'
import AppleIcon from '../assets/image/apple-icon.png'

const Login = () => {
    const [enteredEmail, setEnteredEmail] = useState(null);
    const [enteredPassword, setEnteredPassword] = useState(null);
    const navigate = useNavigate();

    const emailHandler = (event) => setEnteredEmail(event.target.value);
    const passwordHandler = (event) => setEnteredPassword(event.target.value);

    async function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;
        console.log(accessToken);
        navigate("/dashboard")
    }

    const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

    const loginButtonHandler = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <div className='login-main'>
            <div className='login-left-panel'>
                <div className='main-heading'>
                    <h1>Board.</h1>
                </div>
            </div>
            <div className='login-right-panel'>
                <div className='sign-in-main'>
                    <div className='mobile-logo'>
                        <h1>Board.</h1>
                    </div>
                    <div className='sign-in-text'>
                        <h1>Sign In</h1>
                        <h5>Sign in to  your account</h5>
                    </div>
                    <div className='btn-parent-div'>
                        <button className='social-login-btn' onClick={() => login()}><img src={GoogleIcon} alt='sign-in-with-google' />Sign in with Google</button>
                        <button className='social-login-btn apple-btn'><img src={AppleIcon} alt='sign-in-with-apple' />Sign in with Apple</button>
                    </div>
                    <div>
                        <form className='login-form' onSubmit={loginButtonHandler}>
                            <label>Email address</label>
                            <input
                                type="email"
                                onChange={emailHandler}
                                value={enteredEmail}
                                className='login-input'
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={passwordHandler}
                                value={enteredPassword}
                                className='login-input'
                            />
                            <a href='#'>Forgot password?</a>
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    <div className='sign-up-link-text'>
                        <p>Don't have an account? <a href='#'>Register here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;