const initialState = {
  post: {
    id: null,
    title: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: null,
}


export default function reducer (state=initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_POSTS": {
      return {...state, fetching: true}
    }
    case "FETCH_POSTS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POSTS_FULFILLED": {
      console.log(action.payload)
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload
      }
    }
    default: {
      return state
    }
  }
}
