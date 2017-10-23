// import { ADD_POST, SET_VISIBILITY_FILTER } from './actionTypes';

import database from '../database';

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
// function postRequest() {
//   return {
//     type: actionTypes.AddRequest
//   }
// }


export function getPostByID() {
  return dispatch => {
    return database.ref('/').once('value', snap => {
      const response = snap.val();
      dispatch(postSuccess(response))
    })
    .catch((error) => {
      console.log(error);
      dispatch(postError());
    });
  }
}


export const voteReact = () => {
  return {
    type: 'VOTE_REACT'
  }
}

export const voteAngular = () => {
  return {
    type: 'VOTE_ANGULAR'
  }
}

export const voteVuejs = () => {
  return {
    type: 'VOTE_VUEJS'
  }
}
