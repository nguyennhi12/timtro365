import {all, fork} from 'redux-saga/effects';
import loginHandle from './account.saga';
export default function* rootSaga() {
  yield all([fork(loginHandle)]);
}
