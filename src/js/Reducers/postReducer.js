const initialState = {
  posts: null,
  error: null,
};


export default function reducer (state=initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return {...state, fetching: true}
    }
    case 'FETCH_POSTS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_POSTS_FULFILLED': {
      return {
        ...state,
        posts: Object.values(action.payload)
      }
    }
    default: {
      return state
    }
  }
}
