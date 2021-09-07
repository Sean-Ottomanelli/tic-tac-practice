import React, {Component} from 'react';
import Box from './Components/Box';
import Counter from './Components/Counter';
import './App.css';

class App extends Component{

  constructor() {
    super()
    this.state = {
      turn:"blue",
      board:[{column:1, row:1, color:""},
        {column:2, row:1, color:""},
        {column:3, row:1, color:""},
        {column:1, row:2, color:""},
        {column:2, row:2, color:""},
        {column:3, row:2, color:""},
        {column:1, row:3, color:""},
        {column:2, row:3, color:""},
        {column:3, row:3, color:""}],
      winner:false
    }
  }

  selectBox = (column, row) => {

    let newBoard = this.state.board.map(square => square.column == column && square.row == row ? {...square, color:this.state.turn} : square)

    let winType1 = newBoard[0].color == newBoard[1].color && newBoard[0].color == newBoard[2].color && newBoard [0].color != ""
    let winType2 = newBoard[3].color == newBoard[4].color && newBoard[3].color == newBoard[5].color && newBoard [3].color != ""
    let winType3 = newBoard[6].color == newBoard[7].color && newBoard[6].color == newBoard[8].color && newBoard [6].color != ""
    let winType4 = newBoard[0].color == newBoard[3].color && newBoard[0].color == newBoard[6].color && newBoard [0].color != ""
    let winType5 = newBoard[1].color == newBoard[4].color && newBoard[1].color == newBoard[7].color && newBoard [1].color != ""
    let winType6 = newBoard[2].color == newBoard[5].color && newBoard[2].color == newBoard[8].color && newBoard [2].color != ""
    let winType7 = newBoard[0].color == newBoard[4].color && newBoard[0].color == newBoard[8].color && newBoard [0].color != ""
    let winType8 = newBoard[6].color == newBoard[4].color && newBoard[6].color == newBoard[2].color && newBoard [6].color != ""

    let winner = winType1 || winType2 || winType3 || winType4 || winType5 || winType6 || winType7 || winType8 ? true : false

    if (winner) {

      if(winType1) {
        newBoard[0].color = "green";
        newBoard[1].color = "green";
        newBoard[2].color = "green";
      }
      if(winType2) {
        newBoard[3].color = "green";
        newBoard[4].color = "green";
        newBoard[5].color = "green";
      }
      if(winType3) {
        newBoard[6].color = "green";
        newBoard[7].color = "green";
        newBoard[8].color = "green";
      }
      if(winType4) {
        newBoard[0].color = "green";
        newBoard[3].color = "green";
        newBoard[6].color = "green";
      }
      if(winType5) {
        newBoard[1].color = "green";
        newBoard[4].color = "green";
        newBoard[7].color = "green";
      }
      if(winType6) {
        newBoard[2].color = "green";
        newBoard[5].color = "green";
        newBoard[8].color = "green";
      }
      if(winType7) {
        newBoard[0].color = "green";
        newBoard[4].color = "green";
        newBoard[8].color = "green";
      }
      if(winType8) {
        newBoard[6].color = "green";
        newBoard[4].color = "green";
        newBoard[2].color = "green";
      }
    } else {
      this.state.turn == "blue" ? this.setState({turn:"red"}) : this.setState({turn:"blue"});
    }

    this.setState({
      board:newBoard,
      winner:winner
    })
  }

  debugBoard = () => {
    let board = this.state.board
    debugger
  }

  render() {

    return (
      <div className="App">
        <h1>
          TIC TAC TOE
        </h1>
        <h2>
          {this.state.winner ? `${this.state.turn} wins` : `${this.state.turn}'s turn`}
        </h2>
        <div className = "content">
          <div className = "board"> 
            {this.state.board.map(square => <Box
            // modifyBoardState = {this.modifyBoardState} 
            selectBox = {this.selectBox}
            turn = {this.state.turn}
            square = {square}
            // determineWinner = {this.determineWinner}
            winner = {this.state.winner}/>)}
          </div>
        </div>
        <div>
          <Counter/>
        </div>
      </div>
    );
  }
}

export default App;
