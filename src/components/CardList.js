import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.pokemons.map((pokemon) => {
                        return (
                            <Card key={pokemon.id} pokemon={pokemon} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;