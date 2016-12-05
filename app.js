import React from 'react';
import Board from './board.js';
import ScoreKeeper from './scoreKeeper.js';

export default class App extends from React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

    <div>
    <h1>Tic-Tac-Toe</h1>
    <Board />
    <ScoreKeeper />
    </div>

    )
  }

}