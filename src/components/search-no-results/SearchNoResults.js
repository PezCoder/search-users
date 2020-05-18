import React from 'react';
import PropTypes from 'prop-types';
import './searchNoResults.scss';

function SearchNoResults({title}) {
  return (
    <article className="search-no-results">
      <p className="search-no-results__title">{title}</p>
    </article>
  )
}

SearchNoResults.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchNoResults;
