import firebase from '../firebase';
import { push } from 'react-router-redux';

function logInSuccess(response) {
  return {
    type: 'LOG_IN_FULFILLED',
    payload: response
  }
}
function logInError(err) {
  return {
    type: 'LOG_IN_REJECTED',
    payload: err
  }
}

function getStructureSuccess(response) {
  return {
    type: 'GET_NAV_FULFILLED',
    payload: response
  }
}
function getStructureError(err) {
  return {
    type: 'GET_NAV_REJECTED',
    payload: err
  }
}

function getDataByStructureSuccess(response) {
  return {
    type: 'GET_DATA_BY_STRUCTURE_FULFILLED',
    payload: response
  }
}
function getDataByStructureError(err) {
  return {
    type: 'GET_DATA_BY_STRUCTURE_REJECTED',
    payload: err
  }
}
function getCurrentIDSuccess(response) {
  return {
    type: 'GET_CURRENT_ID_FULFILLED',
    payload: response
  }
}
function getCurrentIDError(err) {
  return {
    type: 'GET_CURRENT_ID_REJECTED',
    payload: err
  }
}
function addPostSuccess(id, data) {
  return {
    type: 'CREATE_POST_SUCCESS',
    payload: data,
    postID: id
  }
}
function addPostError(err) {
  return {
    type: 'CREATE_POST_FAILED',
    payload: err
  }
}
function deletePostSuccess(postID) {
  return {
    type: 'REMOVE_POST_SUCCESS',
    payload: postID
  }
}
function deletePostError(err) {
  return {
    type: 'REMOVE_POST_FAILED',
    payload: err
  }
}
function updateDataSuccess(url, node, data) {
  return {
    type: 'UPDATE_DATA_SUCCESS',
    payload: data, 
    path: url,
    node: node
  }
}
function updateDataError(err) {
  return {
    type: 'UPDATE_DATA_FAILED',
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
        dispatch(logInError('Wrong password.'));
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
      console.log(error);
      return dispatch(getStructureError(error));
    });
  }
}

export function getDataByStructure(url) {
  return dispatch => {
    firebase.database().ref(`${url}`).once('value', snap => {
      const response = snap.val();
      return dispatch(getDataByStructureSuccess(response));
    }).catch((error) => {
      console.log(error);
      return dispatch(getDataByStructureError(error));
    });
  }
}

export function getCurrentID() {
  return dispatch => {
    firebase.database().ref('/id').once('value', snap => {
      const response = snap.val();
      return dispatch(getCurrentIDSuccess(response));
    }).catch((error) => {
      console.log(error);
      return dispatch(getCurrentIDError(error));
    });
  }
}

export function addPost(currentPostID, emptyPost) {
  let postCreationDate = new Date();
  postCreationDate = postCreationDate.toLocaleString();
  emptyPost = {
    createdAT: postCreationDate,
    ...emptyPost
  };
  return dispatch => {
    firebase.database().ref().child('/id').update({postID: parseInt(currentPostID) + 1}).then(() => {
      firebase.database().ref().child('homepage/posts/').update({[parseInt(currentPostID) + 1]: emptyPost}).then(() => {
        return dispatch(addPostSuccess(currentPostID, emptyPost));
      }).catch((error) => {
        console.log(error);
        return dispatch(addPostError(error));
      })
    });
  }
}

export function deletePost(postID) {
  return dispatch => {
    firebase.database().ref().child(`homepage/posts/${postID}`).remove().then(() => {
      return dispatch(deletePostSuccess(postID));
    }).catch((error) => {
      console.log(error);
      return dispatch(deletePostError(error));
    });
  }
}

export function updateData(url, node,  data) {
  return dispatch => {
    firebase.database().ref().child(`${url}`).update({[node]: data}).then(() => {
      return dispatch(updateDataSuccess(url, node, data));
    })
    .catch((error) => {
      return dispatch(updateDataError(error));
    })
  }
}
