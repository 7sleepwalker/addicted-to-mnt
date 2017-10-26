// import { ADD_POST, SET_VISIBILITY_FILTER } from './actionTypes';

import firebase from '../firebase';

function fetchGallerySuccess(response) {
  return {
    type: "FETCH_POST_BY_ID_FULFILLED",
    payload: response
  }
}
function fetchGalleryError(err) {
  return {
    type: "FETCH_POST_BY_ID_REJECTED",
    payload: err
  }
}


export function getPostGalleryByID(id) {
  return dispatch => {
    return firebase.database().ref(`/homePage/posts/${id}/gallery`).once('value', snap => {
      const response = snap.val();
      dispatch(fetchGallerySuccess(response))
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchGalleryError());
    });
  }
}
