import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import GalleryReducer from './galleryReducer';
import DashboardReducer from './dashboardReducer';

const reducers = combineReducers({
  posts: PostReducer,
  gallery: GalleryReducer,
  dashboard: DashboardReducer
});


export default reducers;
