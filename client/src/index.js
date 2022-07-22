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



ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider domain="dev-aekjy-pn.us.auth0.com" clientId='SIf2lfxrqThuc9N3g1ILD6zSzWNIJZkd' redirectUri="http://localhost:3000/home">
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


