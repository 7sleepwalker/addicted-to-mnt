const initialState = {
  user: null,
  fetching: false,
  fetched: false,
  error: null,
}

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

    default: {
      return state
    }
  }
}
