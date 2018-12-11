import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = (props) => {

  const onSearch = (event) => {
    props.searchPetCallback(event.target.value)
  }
    return (
      <section>
        <form  className="search-bar-form">
          <h3>Want a Pet?</h3>
          <label htmlFor="searchWord">Search or Clear To Load All Pets</label>
          <input name="searchWord" type="text" onChange={onSearch}/>
        </form>
      </section>
    );

};

SearchBar.propTypes = {

};

export default SearchBar;
