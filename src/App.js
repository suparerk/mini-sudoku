import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Cell extends Component {
  render() {
    return <div className='cell'>{this.props.number}</div>
  }
}

function App() {
  return (
    <div className="App">
      <div className='board'>
        <Cell number={2}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
        <Cell number={3}/>
      </div>
    </div>
  );
}

export default App;
