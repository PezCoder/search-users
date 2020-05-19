import React from 'react';
import PropTypes from 'prop-types';
import SearchSuggestion from '../search-suggestion/SearchSuggestion';
import './searchSuggestions.scss';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {
  updateFocusToIndex,
  updateDisableMouseEvents
} from '../../redux/search/search';

const SearchSuggestions = ({ suggestions, highlightWord }) => {
  const { focusedIndex, disableMouseEvents } = useSelector(
    state => ({
      focusedIndex: state.search.focusedIndex,
      disableMouseEvents: state.search.disableMouseEvents,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <div className="search-suggestions">
      {suggestions.map(({ title, description, subtitle, listItem }, index) => (
        <SearchSuggestion
          focus={focusedIndex === index}
          onMouseOver={() => {
            !disableMouseEvents && dispatch(updateFocusToIndex(index))
          }}
          onMouseMove={() => {
            disableMouseEvents && dispatch(updateDisableMouseEvents(false))
          }}
          highlightWord={highlightWord}
          key={title}
          title={title}
          subtitle={subtitle}
          listItem={listItem}
          description={description}
        />
      ))}
    </div>
  );
};

SearchSuggestions.propTypes = {
  suggestions: PropTypes.array,
  highlightWord: PropTypes.string,
};

export default SearchSuggestions;

