import React, { Component } from 'react';

import CharacterDetails from './CharacterDetails';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import './CharacterList.css';

const CharacterSide = styled.div`
    padding:10px 0;

    &:hover{
        color: white;
        background-color: darkgrey;
    }
`;

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
                        <CharacterSide key={character + ind} onClick={(e) => this.getInfo(e, character)}>{character.name}</CharacterSide>
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