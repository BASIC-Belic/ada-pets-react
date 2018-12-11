import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSearch = (event) => {
    // console.log(event.target.value)
    this.props.searchPetCallback(event.target.value)
  }

  render() {
    return (
      <section>
        <form  className="search-bar-form">
          <h3>Search By Field</h3>
          { /* A form should go here! */ }
          <label htmlFor="searchWord">Search a Pet!</label>
          <input name="searchWord" type="text" value={this.state.fullName} onChange={this.onSearch}/>
        </form>
      </section>
    );
  }
};

SearchBar.propTypes = {

};

export default SearchBar;
