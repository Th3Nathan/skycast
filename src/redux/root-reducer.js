import { combineReducers } from "redux";
import queries from './reducers/queries-reducer';
import session from './reducers/session-reducer';
import sessionForm from './reducers/session-form-reducer';
import home from './reducers/home-reducer';

const rootReducer = combineReducers({
  queries,
  session,
  sessionForm,
  home,
});

export default rootReducer;