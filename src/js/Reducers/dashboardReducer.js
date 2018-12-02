const initialState = {
  user: null,
  error: null,
  showLocationPicker: true,
  activeInput: null
};

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case 'LOG_IN': {
      return {...state, fetching: true}
    }
    case 'LOG_IN_REJECTED': {
      return {
        ...state, 
          error: action.payload
      }
    }
    case 'LOG_IN_FULFILLED': {
      return {
        ...state,
        user: action.payload
      }
    }
    case 'GET_DATA_BY_STRUCTURE_FULFILLED': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'GET_DATA_BY_STRUCTURE_REJECTED': {
      return {
        ...state, 
        error: action.payload
      }
    }
    case 'GET_CURRENT_ID_FULFILLED': {
      return {
        ...state,
        currentID: action.payload
      }
    }
    case 'GET_CURRENT_ID_REJECTED': {
      return {
        ...state,
        error: action.payload
      }
    }
    case 'CREATE_POST_SUCCESS': {
      const posts = {
          ...state.data,
          [action.postID + 1]: action.payload
      };
      return {
        ...state,
        data: Object.values(posts),
        currentID: {
          postID: action.postID + 1
        }
      }
    }
    case 'CREATE_POST_FAILED': {
      return {
        ...state,
        error: action.payload
      }
    }
    case 'REMOVE_POST_SUCCESS': {
      const newPayload = Object.values(state.data).filter(obj => (
        obj.id !== parseInt(action.payload)
      ));
      return {
        ...state,
        data: newPayload
      }
    }
    case 'REMOVE_POST_FAILED': {
      return {
        ...state,
        error: action.payload
      }
    }
    case 'UPDATE_DATA_SUCCESS': {
      console.log('payload', action.payload);
      const node = action.node;
      // const postID = parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
      const payload = typeof action.payload[0] === 'object' ? Object.values(action.payload) : action.payload;
        return {
        ...state,
        data: {
          ...state.data,
          [node]: payload 
        }  
      }
    }
    case 'UPDATE_DATA_FAILED': {
      return {...state, 
      error: action.payload
      }
    }
    case 'DISPLAY_LOCATION_PICKER': {
      return {
        ...state,
        showLocationPicker: true
      }
    }
    case 'HIDE_LOCATION_PICKER': {
      return {
        ...state,
        showLocationPicker: false
      }
    }

    case 'HIDE_LOCATION_PICKER': {
      return {
        ...state,
        showLocationPicker: false
      }
    }

    default: {
      return state
    }
  }
}
