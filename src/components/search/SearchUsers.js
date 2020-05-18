import React, { useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import SearchBar from './SearchBar';
import './searchUsers.scss';
import {loadUsers} from '../../redux/users/users';
import SearchSuggestion from './SearchSuggestion';

function SearchUsers({ type, onChange, onClick }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users, shallowEqual);

  // Load users mock data on page load
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  function handleOnChange(value) {
    console.log('changing', value);
  }

  console.log(users);
  if (users.apiStatus !== 'success') {
    return null;
  }

  const user = users.list[0];

  return (
    <React.Fragment>
      <SearchBar onChange={handleOnChange} />
      <SearchSuggestion
        title={user.id}
        subtitle={user.name}
        listItem='"John" found in items'
        description={user.address}
        highlightWord="123-"
      />
    </React.Fragment>
  );
}

export default SearchUsers;
