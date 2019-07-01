import React from 'react';

import PropType from 'prop-types';

const CharacterDetails = props => {
    const { info } = props;

    return(
        <div>
            <h3>Character Details</h3>
            {info === undefined ?
                <ul>
                    <li><b>Name: </b>{info.name}</li>
                    <li><b>Aliases: </b>{info.aliase}</li>
                    <li><b>Birth Date: </b>{info.born}</li>
                    <li><b>Titles: </b>{info.titles}</li>
                </ul>
            : <div>No Data</div> 
            }
        </div>
        
    );
}

export default CharacterDetails;

CharacterDetails.propType = {
    info: PropType.object
}