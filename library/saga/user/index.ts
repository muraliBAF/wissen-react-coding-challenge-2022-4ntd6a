import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsersListRequest, userLoginRequest } from '../../api';
import * as actionTypes from '../../store/user/action-types';
import { setToken, setUsersList } from '../../store/user/actions';

export function* login(payload: any): any {
  try {
    const response = yield call(userLoginRequest, payload);
    const { token } = response.data;
    yield put(setToken(token));
    toast.success('User loggedin');
  } catch (e: any) {
    const { error } = e?.response.data;
    toast.error(error);
  }
}

export function* getUsersList(token: any): any {
  try {
    const response = yield call(getUsersListRequest, token);
    const { data } = response.data;
    yield put(setUsersList(data));
  } catch (e: any) {
    const { error } = e?.response.data;
    toast.error(error);
  }
}

function* watchSaga() {
  yield takeLatest(actionTypes.USER_LOGIN, login);
  yield takeLatest(actionTypes.GET_USERS_LIST, getUsersList);
}

export default watchSaga;
