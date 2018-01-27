import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import GalleryReducer from './galleryReducer';
import DashboardReducer from './dashboardReducer';
import SidebarReducer from './sidebarReducer';
import TripPlannerReducer from './tripplanerReducer';

const reducers = combineReducers({
  posts: PostReducer,
  gallery: GalleryReducer,
  dashboard: DashboardReducer,
  sidebar: SidebarReducer,
  places: TripPlannerReducer
});


export default reducers;
