import {NEWS_TYPE} from '../constant/account.constant';
const initialState = {
  address: '',
  latitudeLongitude: {},
};
const newsReducer = (state = initialState, action) => {
  console.log('news.reducer.js', action);
  switch (action.type) {
    case NEWS_TYPE.ADDRESS_ADD:
      return {...state, address: action.payload};
    case NEWS_TYPE.LATITUDE_LONGITUDE_ADD:
      return {...state, latitudeLongitude: action.payload};
    default:
      return state;
  }
};
export default newsReducer;
