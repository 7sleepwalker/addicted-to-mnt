// import { ADD_POST, SET_VISIBILITY_FILTER } from './actionTypes';

import firebase from '../firebase';

function postSuccess(response) {
  return {
    type: "FETCH_PLAN_FULFILLED",
    payload: response
  }
}
function postError(err) {
  return {
    type: "FETCH_PLAN_REJECTED",
    payload: err
  }
}


export function getPlan() {
  return dispatch => {
    firebase.database().ref('/tripPlans/japan').once('value', snap => {
      const response = snap.val();
      dispatch(postSuccess(response));
    }).catch((error) => {
      console.log(error);
      dispatch(postError(error));
    });
  }
}
