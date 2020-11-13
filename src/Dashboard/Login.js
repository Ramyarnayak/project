import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Friend from '../Pages/Friend';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';

export class Login extends Component {
    responseGoogle=(response) =>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div>
            <GoogleLogin
            clientId="159513056571-h6u1bb7ejsdi22mqfuhe9laqva5jt69v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
            />
  
            </div>
        )
    }
}

export default Login
