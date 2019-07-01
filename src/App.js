import React, { Component } from 'react';

import CharacterList from './CharacterList';
import characters from './Characters';

import './App.css';

class App extends Component {
  state = {
    search: '',
    sendChars: []
  }

  async handleChange(e){
    e.preventDefault();
    const lookFor = e.target.value;
    let foundChars = [];

    if(e.target.value.length > 2){
      characters.forEach(character => {
        if(character.name.includes(lookFor)){
          foundChars.push(character)
        }
      });
    }

    await this.setState({
      search: e.target.value,
      sendChars: foundChars
    });
  }

  render(){
    const { sendChars } = this.state;
    return (
      <div className="App">
        <input type='text' name="characters" onChange={this.handleChange.bind(this)}/><br/>
        <CharacterList characters={sendChars}/>
      </div>
    );
  }
}
//<input type='text' name="counter" onChange={this.handleChange.bind(this)}/><br/>

export default App;
