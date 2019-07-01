import React from 'react';

import PropType from 'prop-types';
import styled from 'styled-components';

const CharacterUL = styled.ul`
    min-width:300px;
    width:50%;
    margin: 0 auto;
    list-style-type:none;
    text-align:left;
`;

const CharacterDetails = props => {
    const { details } = props;
    return (
        <div>
            <h3>Character Details</h3>
            {Object.keys(details).length !== 0 ?
                <CharacterUL>
                    <li><b>Name: </b>{details.name}</li>
                    <li><b>Aliases: </b>{details.aliase}</li>
                    <li><b>Birth Date: </b>{details.born}</li>
                    <li><b>Titles: </b>{details.titles}</li>
                </CharacterUL>
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