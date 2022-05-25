import {fork, takeLeading, put, call} from 'redux-saga/effects';
import {ACCOUNT_TYPE} from '../constant/account.constant';
import {loginSuccess} from '../action/account.action';
import ApiAccountUntil from '../../untils/ApiAccountUntils';
function* loginHandle(user) {
  const {payload} = user;
  console.log('account.saga.js', payload);
  var information = yield call(ApiAccountUntil.login, payload);
  console.log(information);
  //   const {schedule} = object;
  //   // const arr = yeild select(state => state.listSchedule...)  lấy cái list trong state hiện tại trong store
  //   yield call(saveInAsyncStorage, schedule);

  //   const listSchedule = yield call(getDataInAsyncStorage);
  //   console.log(listSchedule);

  //   yield put(saveSuccess(listSchedule));
  //   try {
  //   } catch (error) {}
}
function* watchFilter() {
  yield takeLeading(ACCOUNT_TYPE.LOGIN_HANDLE, loginHandle);
}

export default function* rootChild() {
  yield fork(watchFilter);
}
