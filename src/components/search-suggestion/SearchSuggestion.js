import React, {useEffect, useRef} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {caseInsensitiveFirstWordMatch} from '../../utilities/utilities';
import './searchSuggestion.scss';

function highlight(text, word) {
  const highlightedText = text.replace(
    caseInsensitiveFirstWordMatch(word),
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
  focus,
  onMouseOver,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    focus && ref.current &&
      ref.current.scrollIntoView &&
      ref.current.scrollIntoView({
        block: 'center',
        behavior: "smooth"
      });
  }, [focus]);

  const searchSuggestionClass = classnames(
    'search-suggestion',
    { 'focus': focus }
  );

  return (
    <article className={searchSuggestionClass} onMouseOver={onMouseOver} ref={ref}>
      <h4
        className="search-suggestion__title"
        dangerouslySetInnerHTML={{ __html: highlight(title, highlightWord) }} />
      <p
        className="search-suggestion__subtitle"
        dangerouslySetInnerHTML={{ __html: highlight(subtitle, highlightWord) }} />
      { listItem && (
        <ul className="search-suggestion__list">
          <li>
            <i className="fas fa-circle"></i>{listItem}
          </li>
        </ul>
      )}
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
};

export default SearchSuggestion;
