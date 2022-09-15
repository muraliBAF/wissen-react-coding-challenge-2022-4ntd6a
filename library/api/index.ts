import axios from 'axios';
import { User } from '../../interface';

export function userLoginRequest({ payload }: any) {
  return axios.request({
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    url: 'https://reqres.in/api/login',
    data: payload,
  });
}

export function getUsersListRequest({ token }: User) {
  return axios.request({
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    url: 'https://reqres.in/api/unknown',
  });
}

// eve.holt@reqres.in  cityslicka
