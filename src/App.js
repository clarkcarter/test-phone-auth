import React, { Component } from 'react';
import firebaseApp from './firebase'
import firebaseui from 'firebaseui'
import firebase from 'firebase'
import Login from './Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
    // FirebaseUI config.
      var uiConfig = {
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
          // Do something.

            return true;
          }
        },
        signInOptions: [{
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'AU',
        }],
        signInSuccessUrl: '/dashboard',
        tosUrl: '/tos'
      };
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#auth-box', uiConfig);
  }

  logout = () => {
    this.setState({
      loggedin: false
    });
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
