// import { ADD_POST, SET_VISIBILITY_FILTER } from './actionTypes';

import firebase from '../firebase';

function postSuccess(response) {
  return {
    type: "FETCH_POSTS_FULFILLED",
    payload: response
  }
}
function postError(err) {
  return {
    type: "FETCH_POSTS_REJECTED",
    payload: err
  }
}


export function getPosts() {
  return dispatch => {
    firebase.database().ref('/homePage/posts').once('value', snap => {
      const response = snap.val();
      dispatch(postSuccess(response));
    }).catch((error) => {
      console.log(error);
      dispatch(postError(error));
    });
  }
}
