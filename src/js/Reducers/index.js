import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import Vote from './vote';



const reducers = combineReducers({
  post: PostReducer,
  Vote
});


export default reducers;
