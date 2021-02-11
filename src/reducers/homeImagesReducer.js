import {FETCH_HOME_IMAGES} from '../actions';

export const homeImagesReducer = (state = [], action) =>{
    switch(action.type){
        case FETCH_HOME_IMAGES:
            return action.payload;
        default:
            return state;
    }
};