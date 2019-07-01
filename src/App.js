import React, { Component } from 'react';

import CharacterList from './CharacterList';
import characters from './Characters';

import './App.css';

class App extends Component {
  state = {
    sendChars: characters
  }

  async handleChange(e) {
    e.preventDefault();
    const lookFor = e.target.value.toLowerCase();
    let foundChars = [];

    // if(e.target.value.length > 2){
    characters.forEach(character => {
      if (character.name.toLowerCase().includes(lookFor)) {
        foundChars.push(character)
      }
    });
    //}

    await this.setState({
      sendChars: foundChars
    });
  }

  render() {
    const { sendChars } = this.state;
    return (
      <div className="App">
        <img className="mainGOTImage" src="/images/got.png" alt="Game of Thrones Logo" />
        <input className="searchCharacter" type='text' name="characters" onChange={this.handleChange.bind(this)} />
        <CharacterList characters={sendChars} />
      </div>
    );
  }
}

export default App;
