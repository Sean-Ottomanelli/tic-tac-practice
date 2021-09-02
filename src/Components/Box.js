import React, {Component} from 'react';

class Box extends Component{
  constructor() {
    super()
  }

  claimSquare = () => {
      if (!this.props.winner) {
          this.props.selectBox(this.props.square.column, this.props.square.row)
      }
    }

  render() {

    return(
      <button className = {`square ${this.props.square.color}`} onClick = {() => !!this.props.square.color ? null : this.claimSquare()}>
      </button>
    )
  }
}

export default Box;