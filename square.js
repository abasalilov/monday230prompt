import React from 'react';
import Square from 'square.js';

export default class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toggled: null,
    }
  }

  toggle() {
    if (this.state.toggled === true) {
      this.setState({toggled: false})
    } else {
      this.setState({toggled: true})
    }
  }

render() {
  return (

    <div>
    <text>
    this is a square yo!
    {this.state.toggle}
    </text>
    </div>


  )
}

}