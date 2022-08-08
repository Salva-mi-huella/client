import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import FormValidation from "reactjs-forms";
import { Auth0Provider} from "@auth0/auth0-react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:4000";


ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider domain="dev-80brrzzs.us.auth0.com" clientId='7UuHieWT0ASFAZrLzMXhkVReSf4hPJlp' redirectUri={window.location.origin}
    audience="http://salva-mi-huella.com"
    scope="read:message">
    <Provider store={store}>
      <BrowserRouter>
      <FormValidation>
        <App />
      </FormValidation>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


