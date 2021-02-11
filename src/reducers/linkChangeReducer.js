import {LINK_CHANGED} from '../actions';

export const linkChangeReducer = (state = false, action) =>{
    switch(action.type){
        case LINK_CHANGED:
            return !state;
        default:
            return state;
    }
};