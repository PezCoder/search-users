import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './searchBar.scss';

function SearchBar({ onChange, onKeyDown }) {
  const [value, setValue] = useState('');
  const searchInputRef = useRef(null);

  useEffect(
    () => {
      onChange && onChange(value);
    },
    [value, onChange]
  );

  function onCrossClick() {
    setValue('');
    onChange('');
    searchInputRef.current.focus();
  }

  return (
    <div className="search-bar">
      <i className="fas fa-search search-bar__icon-search"></i>
      <input
        className="search-bar__input"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={onKeyDown}
        autoCapitalize="off"
        autoComplete="off"
        placeholder="Start typing like: Apartment..."
        ref={searchInputRef}
      />
      {value && (
        <i
          className="fas fa-times search-bar__icon-cross"
          onClick={onCrossClick}
        />
      )}
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default SearchBar;
