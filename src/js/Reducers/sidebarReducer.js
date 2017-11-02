const initialState = {
  nav: null,
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "GET_NAV_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        nav: action.payload
      }
    }
    case "GET_NAV_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    default: {
      return state
    }
  }
}
