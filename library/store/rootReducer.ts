import { combineReducers } from 'redux';
import { reducer as user } from './user/reducer';

export default combineReducers({
  user,
});
