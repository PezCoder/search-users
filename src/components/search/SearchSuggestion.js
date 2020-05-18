import React from 'react';
import PropTypes from 'prop-types';
import {escapeStringForRegExp} from '../../utilities/utilities';
import './searchSuggestion.scss';

function highlight(text, word) {
  const caseInsensitiveFirstWordMatch = new RegExp(
    escapeStringForRegExp(word),
    'i'
  );
  const highlightedText = text.replace(
    caseInsensitiveFirstWordMatch,
    match => `<span class="search-suggestion__highlight">${match}</span>`
  );

  return highlightedText;
}

const SearchSuggestion = ({
  title,
  subtitle,
  listItem,
  description,
  highlightWord,
  onClick
}) => {

  return (
    <article onClick={onClick} className="search-suggestion">
      <h4
        className="search-suggestion__title"
        dangerouslySetInnerHTML={{ __html: highlight(title, highlightWord) }} />
      <p
        className="search-suggestion__subtitle"
        dangerouslySetInnerHTML={{ __html: highlight(subtitle, highlightWord) }} />
      <ul className="search-suggestion__list">
        <li>
          <i class="fas fa-circle"></i>{listItem}
        </li>
      </ul>
      <p
        className="search-suggestion__description"
        dangerouslySetInnerHTML={{ __html: highlight(description, highlightWord) }} />
    </article>
  );
};

SearchSuggestion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  listItem: PropTypes.string,
  description: PropTypes.string,
  highlightWord: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchSuggestion;
