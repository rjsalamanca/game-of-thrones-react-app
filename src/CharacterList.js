import React, { Component } from 'react';

import CharacterDetails from './CharacterDetails';

import PropTypes from 'prop-types';

import './CharacterList.css'
class CharacterList extends Component {
    state = {
        info: {}
    }

    async getInfo(e, char) {
        e.preventDefault();
        await this.setState({
            info: char
        })
    }

    render() {
        const { characters } = this.props;
        const { info } = this.state;
        return (
            <div id="characterInfoContainer">
                <div className="chooseCharacter">
                    <h3>Choose a Character</h3>
                    {characters.map((character, ind) =>
                        <div key={character + ind} onClick={(e) => this.getInfo(e, character)}>{character.name}</div>
                    )}
                </div>
                <div className="info">
                    <CharacterDetails details={info} />
                </div>
            </div>
        );
    }
}

export default CharacterList;

CharacterList.propType = {
    characters: PropTypes.array
}