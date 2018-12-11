import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "test",
      about: "test",
      species: "test"
    };
  }

  searchByName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  }

  searchByAbout = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  }

  searchBySpecies = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  }

  onSearch = () => {
    this.props.searchPetCallback({
      name: this.state.fullName,
      about: this.state.about,
      species: this.state.species
    })
  }

  render() {
    return (
      <section>
        <form  className="search-bar-form" onChange={this.props.onSearch}>
          <h3>Search By Field</h3>
          { /* A form should go here! */ }
          <label htmlFor="fullName">Name</label>
          <input name="fullName" type="text" value={this.state.fullName} onChange={this.searchByName}/>
          <label htmlFor="about">About</label>
          <input name="about" type="text" value={this.state.about} onChange={this.searchByAbout}/>
          <label htmlFor="species">Species</label>
          <input name="species" type="text" value={this.state.species} onChange={this.searchBySpecies}/>
        </form>
      </section>
    );
  }
};

SearchBar.propTypes = {

};

export default SearchBar;
