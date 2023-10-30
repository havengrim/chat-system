import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons/lib/icons";
import { auth } from '../firebase';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const Login = () => {
    const authInstance = auth; // Get the auth instance
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichat!</h2>

                <div
                    className="login-button google"
                    onClick={() => {
                        const provider = new GoogleAuthProvider();
                        authInstance.signInWithRedirect(provider);
                    }}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br /> <br />
                <div
                    className="login-button facebook"
                    onClick={() => {
                        const provider = new FacebookAuthProvider();
                        authInstance.signInWithRedirect(provider);
                    }}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;
