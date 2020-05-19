import React, { useEffect, useState, useCallback } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import './searchUsers.scss';
import {loadUsers} from '../../redux/users/users';
import SearchBar from '../search-bar/SearchBar';
import SearchSuggestions from '../search-suggestions/SearchSuggestions';
import {caseInsensitiveFirstWordMatch} from '../../utilities/utilities';
import SearchNoResults from '../search-no-results/SearchNoResults';
import {eventKeys} from '../../constants';
import {
  updateSearchSuggestions,
  updateSearchQuery
} from '../../redux/search/search';
var debounce = require('lodash.debounce');

function SearchUsers({ type, onChange, onClick }) {
  const dispatch = useDispatch();

  const { searchQuery, searchSuggestions, users } = useSelector(
    state => ({
      users: state.users.list,
      searchQuery: state.search.query,
      searchSuggestions: state.search.suggestions,
    }),
    shallowEqual
  );

  const setSearchSuggestions = useCallback(
    (suggestions) => dispatch(updateSearchSuggestions(suggestions)),
    [dispatch]
  );

  const setSearchQuery = useCallback(
    (searchQuery) => dispatch(updateSearchQuery(searchQuery)),
    [dispatch]
  );

  // Load users mock data on page load
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleOnChange = useCallback(
    // Although the demo currently filters from static data locally
    // usually this happens through an API call in real world applications
    // Hence a debounce is necessary to avoid API calls on every keystroke
    // which can be expensive
    debounce(value => {
      if (!value.trim()) {
        setSearchSuggestions(null);
        return;
      }

      setSearchQuery(value);
      setSearchSuggestions(
        filterSearchSuggestions(users, value)
      );
    }, 300),
    [users]
  );


  function handleKeyDown(event) {
    if (event.key === eventKeys.ArrowUp
      || event.key === eventKeys.ArrowDown) {
    }
  }

  if (!users.length) {
    return null;
  }

  const noSearchResults = (searchQuery && searchSuggestions && searchSuggestions.length === 0);

  return (
    <React.Fragment>
      <SearchBar onChange={handleOnChange} onKeyDown={handleKeyDown} />
      {
        searchSuggestions && <SearchSuggestions
          suggestions={searchSuggestions} highlightWord={searchQuery} />
      }
      { noSearchResults && <SearchNoResults title="No User Found" /> }
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
