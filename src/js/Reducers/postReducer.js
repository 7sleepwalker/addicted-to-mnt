const initialState = {
  posts: {
    id: 0,
    title: "Missing posts",
    createdAT: null,
    gallery: null,
    places: null,
    tags: null
  },
  fetching: false,
  fetched: false,
  error: null,
}


export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS": {
      return {...state, fetching: true}
    }
    case "FETCH_POSTS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POSTS_FULFILLED": {
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
