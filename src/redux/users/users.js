import {fetchUsers} from "./usersApi";

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export const loadUsers = () => dispatch => {
  fetchUsers().then(users => {
    dispatch({
      type: LOAD_USERS_SUCCESS,
      payload: users,
    });
  });
};

const initialState = {
  list: [],
  apiStatus: null,
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        apiStatus: 'success',
      };

    default:
      return { ...state };
  }
}
