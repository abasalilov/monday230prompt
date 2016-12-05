import React from 'react';
import Square from 'square.js';

export default class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      board: [1,2,3,4,5,6,7,8,9],
      row1: null,
      row2: null, 
      row3: null,
      counter:0,
    }
  }

  renderBoard() {
    return this.state.board.map(function(square) {
      counter++;
      return <Square className="square" key={counter}>{station.call} />})
  }

  render() {
    let counter = 0;
    return (

      <div>
      <h1> Tic-Tac-Yo! </h1>
      <div>{ this.renderBoard()}
      </div>
      </div>
      )
  }
