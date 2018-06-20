const initialState = {
  user: null,
  fetching: false,
  fetched: false,
  error: null,
};

function setToValue(obj, value, path) {
    let i;
    path = path.split('/');
    for (i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];

    obj[path[i]] = value;
}

// setToValue(data, Object.values(action.payload), url);

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "LOG_IN": {
      return {...state, fetching: true}
    }
    case "LOG_IN_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "LOG_IN_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
    case "GET_DATA_BY_STRUCTURE_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
      }
    }
    case "GET_DATA_BY_STRUCTURE_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "UPDATE_DATA_SUCCESS": {
      console.log('path:', action.path);
      console.log('state:', Object.values(action.payload));
      console.log('state:', action.data);
      console.log('action.payload', action.payload);
      return {
        fetching: false,
        fetched: true,
        data: {
          ...state.data,
          places: action.data,  
        }  
      }
    }
    case "UPDATE_DATA_FAILED": {
      return {...state, fetching: false, error: action.payload}
    }

    default: {
      return state
    }
  }
}
