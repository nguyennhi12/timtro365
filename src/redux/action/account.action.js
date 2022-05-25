import {ACCOUNT_TYPE} from '../constant/account.constant';
export const loginHandle = payload => ({
  type: ACCOUNT_TYPE.LOGIN_HANDLE,
  payload: payload,
});
export const loginSuccess = payload => ({
  type: ACCOUNT_TYPE.LOGIN_SUCCESS,
  payload: payload,
});
export const loginFailure = payload => ({
  type: ACCOUNT_TYPE.LOGIN_FAILURE,
  payload: payload,
});
