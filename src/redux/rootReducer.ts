import { combineReducers } from 'redux';
import billReducer from './billReducer';

const rootReducer = combineReducers({
  bills: billReducer,
});

export default rootReducer;
