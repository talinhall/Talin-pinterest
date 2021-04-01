import {DISPLAY_MOBIL_NAV_BAR} from '../actions';

export const MobilNavBarReducer = (state= false, action) =>{
    switch(action.type){
        case DISPLAY_MOBIL_NAV_BAR:
            return !state;
        default:
            return state;
    }
};