import {homeImagesReducer} from './homeImagesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    homeImages: homeImagesReducer
});

