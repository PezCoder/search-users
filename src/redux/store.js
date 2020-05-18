import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../redux/users/users';

export default function configureStore(initialState={}) {
  return createStore(
    combineReducers({
      users: usersReducer,
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
