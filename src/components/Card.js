import React, {Component} from 'react';

class Card extends Component {
    render() {
        let { pokemon } = this.props;
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        return (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5">
                <img width='200' height='200' alt='pokemon' src={pokemon.sprites} />
                <h2>{name}</h2>
                <a href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}><h3>Description</h3></a>
            </div>
        );
    }
}


export default Card;