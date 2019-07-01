import React from 'react';

import PropType from 'prop-types';

const CharacterDetails = props => {
    const { details } = props;
    return(
        <div>
            <h3>Character Details</h3>
            {Object.keys(details).length !== 0 ?
                <ul>
                    <li><b>Name: </b>{details.name}</li>
                    <li><b>Aliases: </b>{details.aliase}</li>
                    <li><b>Birth Date: </b>{details.born}</li>
                    <li><b>Titles: </b>{details.titles}</li>
                </ul>
            : 
                <div>No Data</div> 
            }
        </div>
        
    );
}

export default CharacterDetails;

CharacterDetails.propType = {
    detail: PropType.object
}