import React from 'react';
import Game from '../src/components/game/Game';
import './App.css';

import raccoon from "./assets/images/raccoon.jpg"
import squirrel from "./assets/images/squirrel.jpg"
import bunny from "./assets/images/bunnyLogo.png"
import hound from "./assets/images/HoundLogo.jpg"

function App(props) {
  const raccoons = {
    name: 'Raccoons',
    logoSrc: raccoon
  }

  const squirrels = {
    name: 'Squirrel',
    logoSrc: squirrel
  }

  const bunnies = {
    name: 'Bunnies',
    logoSrc: bunny
  }

  const hounds = {
    name:  'Hounds',
    logoSrc: hound
  }

  return (
    <div className="App">
      <Game
        venue="Smith Arena"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Family Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
