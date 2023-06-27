import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientID = process.env.GOOGLE_OAUTH_CLIENT_ID;
console.log(clientID);
root.render(
  <GoogleOAuthProvider clientId={clientID}>
      <App />
  </GoogleOAuthProvider>
);
