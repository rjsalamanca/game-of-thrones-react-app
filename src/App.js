import React from 'react';

import CharacterList from './CharacterList';
import characters from './Characters';

import './App.css';

function App() {
  return (
    <div className="App">
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
