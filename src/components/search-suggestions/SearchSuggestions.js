import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SearchSuggestion from '../search-suggestion/SearchSuggestion';
import './searchSuggestions.scss';

const SearchSuggestions = ({ suggestions, highlightWord }) => {
  const [focusedIndex, setFocusToIndex] = useState(null);

  return (
    <div className="search-suggestions">
      {suggestions.map(({ title, description, subtitle, listItem }, index) => (
        <SearchSuggestion
          focus={focusedIndex === index}
          onMouseOver={() => {setFocusToIndex(index)}}
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

