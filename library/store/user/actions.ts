import { Token, UsersList } from '../../../interface';
import * as actionTypes from './action-types';

export const userLogin = (payload: any) => ({
  type: actionTypes.USER_LOGIN,
  payload,
});

export const setToken = (token: Token) => ({
  type: actionTypes.SET_TOKEN,
  token,
});

export const getUsersList = (token: Token) => ({
  type: actionTypes.GET_USERS_LIST,
  token,
});

export const setUsersList = (usersList: UsersList) => ({
  type: actionTypes.SET_USERS_LIST,
  usersList,
});

export const userLogout = (token: any = null) => ({
  type: actionTypes.SET_TOKEN,
  token,
});
