const initialState = {
  places: null,
  fetching: false,
  fetched: false,
  error: null,
}


export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_PLAN": {
      return {...state, fetching: true}
    }
    case "FETCH_PLAN_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_PLAN_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        places: action.payload
      }
    }
    default: {
      return state
    }
  }
}
