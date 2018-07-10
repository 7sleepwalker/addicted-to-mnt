const initialState = {
  user: null,
  error: null,
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
    case 'UPDATE_DATA_SUCCESS': {
      const node = action.node;
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

    default: {
      return state
    }
  }
}
