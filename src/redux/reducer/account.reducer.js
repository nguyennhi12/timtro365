import {ACCOUNT_TYPE} from '../constant/account.constant';
const initialState = {
  information: {},
};
const accountReducer = (state = initialState, action) => {
  console.log('account.reducer.js', action);
  switch (action.type) {
    case ACCOUNT_TYPE.LOGIN_SUCCESS:
      return {};
    case ACCOUNT_TYPE.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};
export default accountReducer;
