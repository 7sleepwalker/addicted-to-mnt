const initialState = {
  gallery: null,
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_POST_BY_ID": {
      return {...state, fetching: true}
    }
    case "FETCH_POST_BY_ID_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POST_BY_ID_FULFILLED": {
      console.log("PAYLOAD: " + action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        gallery: action.payload
      }
    }
    default: {
      return state
    }
  }
}
