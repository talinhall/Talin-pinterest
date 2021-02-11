import {homeImagesReducer} from './homeImagesReducer';
import {linkChangeReducer} from './linkChangeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    homeImages: homeImagesReducer,
    linkChange: linkChangeReducer

});

