import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    // const config = {
    //   apiKey: "AIzaSyA_TkSTsw8ldxh7A4WTz3-TDF3usto50UM",
    //   authDomain: "nblogic-9c99f.firebaseapp.com",
    //   databaseURL: "https://nblogic-9c99f.firebaseio.com",
    //   projectId: "nblogic-9c99f",
    //   storageBucket: "nblogic-9c99f.appspot.com",
    //   messagingSenderId: "498066422349"
    // };
    // firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
