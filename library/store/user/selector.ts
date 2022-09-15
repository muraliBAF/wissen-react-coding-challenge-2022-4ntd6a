import { useSelector } from 'react-redux';
import { store } from '..';
import { User } from '../../../interface';

export type RootState = ReturnType<typeof store.getState>;

export const useUserAccount = (): User => {
  return useSelector((state: RootState) => state.user);
};
