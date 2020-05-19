import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../redux/users/users';
import searchReducer from '../redux/search/search';

export default function configureStore(initialState={}) {
  return createStore(
    combineReducers({
      users: usersReducer,
      search: searchReducer,
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
