import { all, call } from 'redux-saga/effects';
import user from './user';

function* rootSaga() {
  try {
    yield all([call(user)]);
  } catch (error) {
    console.log(error);
  }
}

export default rootSaga;
