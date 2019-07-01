import React, { Component } from 'react';

import CharacterDetails from './CharacterDetails';

import PropTypes from 'prop-types';

class CharacterList extends Component{
    state = {
        info: {}
    }

    async getInfo(e,char){
        e.preventDefault();
        await this.setState({
            info: char
        })
    }

    render(){
        const {characters} = this.props;
        const { info } = this.state;

        return(
            <div>
                <h1>Characters</h1>
                <div>
                    <div className="info" style={{border:'1px solid red', width:'100px', minHeight:'20px'}}>
                        <CharacterDetails details={info}/>
                    </div>
                    {characters.map((character,ind) => 
                        <div key={character+ind} onClick={(e) => this.getInfo(e, character)}>{character.name}</div>
                    )}
                </div>
            </div>
        );
    }
}

export default CharacterList;

CharacterList.propType = {
    characters: PropTypes.array
}