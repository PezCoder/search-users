import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './searchBar.scss';

function SearchBar({ onChange }) {
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
        autoCapitalize="off"
        autoComplete="off"
        placeholder="Search users by ID, address, name, items, pincode"
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
};

export default SearchBar;
