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

function getStructureSuccess(response) {
  return {
    type: "GET_NAV_FULFILLED",
    payload: response
  }
}
function getStructureError(err) {
  return {
    type: "GET_NAV_REJECTED",
    payload: err
  }
}

function getDataByStructureSuccess(response) {
  return {
    type: "GET_DATA_BY_STRUCTURE_FULFILLED",
    payload: response
  }
}
function getDataByStructureError(err) {
  return {
    type: "GET_DATA_BY_STRUCTURE_REJECTED",
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


export function getStructure() {
  return dispatch => {
    firebase.database().ref('/pageStructure').once('value', snap => {
      const response = snap.val();
      return dispatch(getStructureSuccess(response));
    }).catch((error) => {
      return dispatch(getStructureError(error));
      console.log(error);
    });
  }
}

export function getDataByStructure(url) {
  return dispatch => {
    firebase.database().ref(`${url}`).once('value', snap => {
      const response = snap.val();
      return dispatch(getDataByStructureSuccess(response));
    }).catch((error) => {
      return dispatch(getDataByStructureError(error));
      console.log(error);
    });
  }
}
