import React from 'react';

export default class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Player1Score: null,
      Player2Score: null
    }
  }

  render() {
    return (

      <div>
        <h1> ScoreBoard Here </h1>
      </div>


      )
  }

}