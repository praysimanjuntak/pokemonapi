import React from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Searchbar from '../components/Searchbar';
import './App.css';

const pokemonNumber = 151;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            searchField: ''
        }
    }

    async componentDidMount() {
        for (let i = 0; i < pokemonNumber; i++) {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(response => response.json())
                .then(response => {
                    this.setState({ pokemons: [...this.state.pokemons, {name: response.name, id: i+1, sprites: response.sprites.front_default }]})
                })
                .catch(error => console.log(error))
        }
        
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredPokemon = this.state.pokemons.filter(pokemon => {
            return pokemon.name.includes(this.state.searchField.toLowerCase());
        })
        return !this.state.pokemons.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'> Pokemon </h1>
                <Searchbar searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList pokemons={filteredPokemon} />
                </Scroll>
            </div>
        );
    }
}

export default App;
