import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_START
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  // redux-thunk gives access to dispatch & allows waiting for promise returns
  // dispatch of the action is not invoked until promise returns
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((authError) => {
        console.log(
          `firebase.auth().signInWithEmailAndPassword ${authError}`);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((createError) => {
            console.log(
              `firebase.auth().createUserWithEmailAndPassword ${createError}`);
              loginUserFailure(dispatch);
          });
      });
    };
};

export const logoutUser = () => {
  return(dispatch) => {
    dispatch({type: LOGOUT_USER_START});
    firebase.auth().signOut().then(user => logoutUserSuccess(dispatch, user));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFailure = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_FAILURE,
    payload: user
  });
};

const logoutUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS,
    payload: user
  })

  Actions.login();
};

// const navi = 
