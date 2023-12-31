import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// import {Provider} from './context/Provider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6ypy15z5zqt4rlri.us.auth0.com"
    clientId="oRcCQBrBwjjcHaHgE3aGYavgACurmwRI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
    
  </Auth0Provider>
    
  
);

