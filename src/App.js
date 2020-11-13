
import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Dashboard/Navbar';
import Friend from './Pages/Friend'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import './App.css'
import Login from './Dashboard/Login'



// function App() {

//   return (
//   <>
//   {/* <Login></Login> */}
//   <Router>
//   <Navbar/>
//   <Switch>
//   <Route path='/home' component={Home} />
//           <Route path='/profile' component={Profile} />
//           <Route path='/friends' component={Friend} />
         
   
//   </Switch>
//   </Router>
  
//   </>
//   );
// }

// export default App;






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }




  
  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };

  logout = () => {
    this.setState({isUserLoggedIn: false})
  };

  render() {
    return (
      <div className="App">
        {!this.state.isUserLoggedIn && (
          
          <GoogleLogin className="login"
            clientId="159513056571-gdtkf7l3f92hvn1vsui5gnse2qa8s93k.apps.googleusercontent.com" //TO BE CREATED
            render={renderProps => (
              <button
                className="login-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Log in with Google
              </button>
             
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        )}
        {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              

              {/* <div className="image">
                <img src={this.state.userDetails.imageUrl} /> */}
                
                
              {/* </div> */}
            
                
                <Router>
  
   <Navbar name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} userDetails={this.state.userDetails} isUserLoggedIn={this.state.isUserLoggedIn} fun={this.logout} imageURL={this.state.userDetails.imageUrl}/>
   <div className="logout-btn-div">
              <GoogleLogout 
                render={renderProps => (
                  <button className="logout-btn"
                 
                    onClick={renderProps.onClick}
                  >
                    Log Out
                  </button>
                )}
                onLogoutSuccess={this.logout}
              /></div>
               <Switch>
  <Route path='/home' component={Home} />
           <Route path='/profile' render={()=>(<div><Profile name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} imageURL={this.state.userDetails.imageUrl}/></div>)} />
           <Route path='/friends' component={Friend} />
         
   
  </Switch>
  </Router>
            
              {/* <div className="email"><i>{this.state.userDetails.email}</i></div> */}
            </div>
          
          </div>
        )}
      </div>
    );
  }
}

export default App;