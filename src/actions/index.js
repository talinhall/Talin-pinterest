import unsplash from '../api/unsplash';

export const FETCH_HOME_IMAGES = 'FETCH_HOME_IMAGES';


export const fetchHomeImages = (term) => async dispatch =>{
    const response = await unsplash.get('search/photos', {
        params: {query:term, per_page:30, orientation:'portrait'}
    });
    dispatch ( {type: FETCH_HOME_IMAGES, payload: response.data.results});

};

