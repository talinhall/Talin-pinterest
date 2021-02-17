import {homeImagesReducer} from './homeImagesReducer';
import {MobilNavBarReducer} from './MobilNavBarReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    homeImages: homeImagesReducer,
    displayMobilNavBar: MobilNavBarReducer
});

