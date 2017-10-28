import firebase from '../firebase';
import { push } from 'react-router-redux';

function logInSuccess(response) {
  return {
    type: "LOG_IN_FULFILLED",
    payload: response
  }
}
function logInError(err) {
  return {
    type: "LOG_IN_REJECTED",
    payload: err
  }
}

function getNavSuccess(response) {
  return {
    type: "GET_NAV_FULFILLED",
    payload: response
  }
}
function getNavError(err) {
  return {
    type: "GET_NAV_REJECTED",
    payload: err
  }
}

export function logIn(email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(logInSuccess(user));
    })
    .catch((err) => {
      let errorCode = err.code;
      let errorMessage = err.message;
      if (errorCode === 'auth/wrong-password') {
        dispatch(logInError("Wrong password."));
      } else {
        dispatch(logInError(errorMessage));
      }
      console.log(err);
    });
  }
}


export function getNav() {
  return dispatch => {
    firebase.database().ref('/navMenu').once('value', snap => {
      const response = snap.val();
      dispatch(getNavSuccess(response));
    }).catch((error) => {
      dispatch(getNavError(error));
      console.log(error);
    });
  }
}
