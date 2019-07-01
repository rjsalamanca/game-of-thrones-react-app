import React, { Component } from 'react';

import PropType from 'prop-types';
import styled from 'styled-components';

const CharacterUL = styled.ul`
    min-width:300px;
    width:50%;
    margin: 0 auto;
    list-style-type:none;
    text-align:left;
`;

const CharacterImage = styled.img`
    width:200px;
`;


class CharacterDetails extends Component {
    state = {
        imageURL: ''
    }

    async giphySearch(keyword) {
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=58ODCbp6mKv7IWro6oE6IQWMF9Inoosp&limit=4`)
        const imageData = await response.json();

        try {
            this.setState({
                imageURL: imageData.data[0].images.fixed_height.url
            })
        } catch (err) {

            this.setState({
                imageURL: '/images/empty.jpg'
            })
        }
    }

    render() {
        const { details } = this.props;
        this.giphySearch(details.name)
        return (
            <div>
                <h3>Character Details</h3>
                {Object.keys(details).length !== 0 ?
                    <CharacterUL>
                        <li><CharacterImage src={this.state.imageURL} alt={details.name + ' Image'} /></li>
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
}

export default CharacterDetails;

CharacterDetails.propType = {
    detail: PropType.object
}