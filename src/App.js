import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Cell extends Component {
  state = {
    number: 1
  }
  render() {
    return <div
              onClick={(e) => {
                this.setState({
                  number: (this.props.number + 1) % 5
                })
              }}
              className={`cell ${this.props.isInitial ? 'initial' : ''}`}
            >
              {this.props.number !== 0 && this.props.number}
            </div>
  }
}

class Board extends Component {
  state = {
    board: [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]],
    initial: [
      [true, false, true, false],
      [true, false, true, false],
      [true, false, true, false],
      [true, false, true, false],
    ]
  }
  render() {
    return (
      <div className='board'>
        {
          this.state.board.map((row, i) => 
            row.map((number, j) => (
              <Cell
                key={`cell-${i}-${j}`}
                number={number}
                isInitial={this.state.initial[i][j]}
              />
            ))
          )
        }
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
