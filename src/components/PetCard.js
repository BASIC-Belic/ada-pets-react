import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location, onPetSelectCallback, onPetDeleteCallback} = props;

  const onSelect = () => {
    onPetSelectCallback(id)
  }
  const onDelete = () => {
    onPetDeleteCallback(id)
  }
  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        { speciesEmoji(species) } {id} - {name}
        <button
          onClick={onSelect}
          className="btn btn-primary pet-card--select-pet-btn"
          >
          Select
        </button>
        <button
          type="button"
          className="btn btn-danger pet-card--close-btn"
          aria-label="Remove"
          onClick={onDelete}
          >
          Remove
        </button>
      </section>
      <section className="pet-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  about: PropTypes.string,
  location: PropTypes.string,
  onPetSelectCallback: PropTypes.func,
  onPetDeleteCallback: PropTypes.func
}

export default PetCard;
