import { UsersList } from '../../../interface';
import * as actionTypes from './action-types';

const initialState = {
  token: null,
};

interface ActionState {
  type: string;
  token: string;
  usersList: UsersList;
}

export const reducer = (state = initialState, action: ActionState) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      const { token } = action;
      return { ...state, token };
    case actionTypes.SET_USERS_LIST:
      const { usersList } = action;
      return { ...state, usersList };
    default:
      return state;
  }
};
