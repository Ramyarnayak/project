import * as React from "react";
import * as Scrivito from "./Scrivito";
import {
  GoogleAPI,
  GoogleLogin,
  GoogleLogout,
  googleGetAuthResponse,
} from "react-google-oauth";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Dashboard/Navbar';
import Friend from './Pages/Friend'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import './App.css'
import Login from './Dashboard/Login'

const CLIENT_ID =
  "159513056571-gdtkf7l3f92hvn1vsui5gnse2qa8s93k.apps.googleusercontent.com";

export const visitorLoggedInWithGoogle = !!window.localStorage.getItem(
  "loggedInWithGoogle"
);

function setGoogleVisitor({ idToken }) {
  if (visitorLoggedInWithGoogle) {
    Scrivito.setVisitorIdToken(idToken);
  } else {
    window.localStorage.setItem("loggedInWithGoogle", "yes");
    window.location.replace(window.location.href.replace(/404\?path=\%2F/, ""));
  }
}

function clearGoogleVisitor() {
  window.localStorage.removeItem("loggedInWithGoogle");
  if (visitorLoggedInWithGoogle) {
    window.location.reload();
  }
}

class LoginWithGoogle extends React.Component {
  render() {
    return (
      <GoogleAPI
        clientId={CLIENT_ID}
        onUpdateSigninStatus={isSignedIn => {
          if (isSignedIn) {
            setGoogleVisitor({ idToken: googleGetAuthResponse().id_token });
          } else {
            clearGoogleVisitor();
          }
        }}
        onInitFailure={clearGoogleVisitor}
      >
        {visitorLoggedInWithGoogle ? (
 
        
          <GoogleLogout text="Log out" width="160px" />
        ) : (
          <GoogleLogin text="Log in" width="140px" />
        )}
      </GoogleAPI>
    );
  }
}

export default LoginWithGoogle;