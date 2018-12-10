import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const pets = props.pets.map((pet, i) => {
    return (
      <PetCard id={pet.id} key={i} name={pet.name} species={pet.species} about={pet.about} location={pet.name} onPetSelectCallback={props.onSelectPet}/>
    )
  })

  return (
    <div className="card-group">
      {pets}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
