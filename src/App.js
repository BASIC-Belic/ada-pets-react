import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  displayCurrentPet = (id) => {
    const pet = this.state.petList.find( s => s.id === id );

    this.setState ({
      currentPet: pet
    })
  }

  deletePet = (id) => {
    let updatedPetList = this.state.petList
    const petIndex = updatedPetList.findIndex( s => s.id === id )
    const deletedPet = updatedPetList.splice(petIndex, 1)
    this.setState({
      petList: updatedPetList
    })

    if (this.state.currentPet === deletedPet[0]) {
      this.setState({
        currentPet: undefined
      })
    }

  }

  render() {
    const { currentPet } = this.state;

    // this.state.currentPet ? { currentPet } = this.state : { currentPet } = ""
    let detailsSection = ""
    currentPet ? detailsSection = <PetDetails currentPet={currentPet}/> : detailsSection = ""

      return (
        <main className="App">
          <header className="app-header">
            <h1>Ada Pets</h1>
          </header>
          <section className="search-bar-wrapper">
            { /* Wave 4:  Place to add the SearchBar component */ }
            <SearchBar />
          </section>
          {detailsSection}
          <section className="pet-list-wrapper">

            <PetList pets={pets} onSelectPet={this.displayCurrentPet} onPetDelete={this.deletePet}/>
          </section>
          <section className="new-pet-form-wrapper">
            { /* Wave 3:  Where NewPetForm should appear */ }
          </section>
        </main>
      );
    }
  }

  export default App;
