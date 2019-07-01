import React from 'react';

import PropTypes from 'prop-types';

const CharacterList = props => {
    const {characters} = props;
    return(
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map((character,ind) => 
                    <li key='ind'>{character.name}</li>    
                )}            
            </ul>
        </div>
    );
}

export default CharacterList;

CharacterList.propType = {
    characters: PropTypes.array
}