import unsplash from '../api/unsplash';

export const FETCH_HOME_IMAGES = 'FETCH_HOME_IMAGES';
export const DISPLAY_MOBIL_NAV_BAR = 'DISPLAY_MOBIL_NAV_BAR';


export const fetchHomeImages = (term) => async dispatch =>{
    const response = await unsplash.get('search/photos', {
        params: {query:term, per_page:30, orientation:'portrait'}
    });
    dispatch ( {type: FETCH_HOME_IMAGES, payload: response.data.results});
};

export const displayMobilNavBar = () =>{
    return{
        type: DISPLAY_MOBIL_NAV_BAR
    };
};

