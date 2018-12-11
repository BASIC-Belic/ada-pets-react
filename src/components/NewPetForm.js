import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      about: "",
      species: ""
    };
  }


  updateName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  }

  updateAbout = (event) => {
    this.setState({
      about: event.target.value,
    });
  }

  updateSpecies = (event) => {
    this.setState({
      species: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addPetCallback({
      name: this.state.fullName,
      about: this.state.about,
      species: this.state.species
    })

    this.setState({
      fullName: "",
      about: "",
      species: ""
    });
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <label htmlFor="fullName">Name</label>
        <input name="fullName" type="text" value={this.state.fullName} onChange={this.updateName}/>
        <label htmlFor="about">About</label>
        <input name="about" type="text" value={this.state.about} onChange={this.updateAbout}/>
        <label htmlFor="species">Species</label>
        <input name="species" type="text" value={this.state.species} onChange={this.updateSpecies}/>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet"/>
      </form>
    );
  }

}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
