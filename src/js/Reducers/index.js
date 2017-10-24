import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import GalleryReducer from './galleryReducer';

const reducers = combineReducers({
  posts: PostReducer,
  gallery: GalleryReducer
});


export default reducers;
