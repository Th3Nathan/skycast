import { combineReducers } from "redux";
import queries from './reducers/queries-reducer';
import session from './reducers/session-reducer';
import sessionForm from './reducers/session-form-reducer';

const rootReducer = combineReducers({
  queries,
  session,
  sessionForm,
});

export default rootReducer;