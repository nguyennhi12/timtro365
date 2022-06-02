import {NEWS_TYPE} from '../constant/account.constant';
export const addressAdd = payload => ({
  type: NEWS_TYPE.ADDRESS_ADD,
  payload: payload,
});

export const latitudeLongitudeAdd = payload => ({
  type: NEWS_TYPE.LATITUDE_LONGITUDE_ADD,
  payload: payload,
});
