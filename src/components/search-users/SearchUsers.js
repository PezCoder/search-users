import React, { useEffect, useState, useCallback } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import './searchUsers.scss';
import {loadUsers} from '../../redux/users/users';
import SearchBar from '../search-bar/SearchBar';
import SearchSuggestions from '../search-suggestions/SearchSuggestions';
import {caseInsensitiveFirstWordMatch} from '../../utilities/utilities';

function SearchUsers({ type, onChange, onClick }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list, shallowEqual);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState(null);

  // Load users mock data on page load
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleOnChange = useCallback(
    (value) => {
      if (!value.trim()) {
        setSearchSuggestions(null);
        return;
      }

      setSearchQuery(value);
      setSearchSuggestions(
        filterSearchSuggestions(users, value)
      );
    },
    [users]
  );

  if (!users.length) {
    return null;
  }

  return (
    <React.Fragment>
      <SearchBar onChange={handleOnChange} />
      {
        searchSuggestions && <SearchSuggestions
          suggestions={searchSuggestions} highlightWord={searchQuery} />
      }
    </React.Fragment>
  );
}

function findWord(text, word) {
  return text.match(
    caseInsensitiveFirstWordMatch(word)
  ) !== null;
}

function filterSearchSuggestions(users, searchQuery) {
  return users.reduce((acc, user) => {
    // Append to accumulator if searchQuery is found in this user
    const isFoundInList = user.items.filter(item => findWord(item, searchQuery)).length > 0;
    if (
      findWord(user.id, searchQuery) ||
      findWord(user.name, searchQuery) ||
      findWord(user.address, searchQuery) ||
      isFoundInList
    ) {
      return [
        ...acc,
        mapUserToSuggestion(user, isFoundInList, searchQuery),
      ];
    }

    // Else return the existing accumulator
    return acc;
  }, []);
}

function mapUserToSuggestion(user, isFoundInList = false, searchQuery) {
  return {
    title: user.id,
    subtitle: user.name,
    listItem: isFoundInList ? `"${searchQuery}" found in items`: null,
    description: user.address,
    highlightWord: searchQuery,
  };
}

export default SearchUsers;
