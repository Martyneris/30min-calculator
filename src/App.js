import React, { Component } from 'react';
import './App.css';
// import Button from './Button'

class App extends Component {

  state = {
    resultbar: 0,
    calcAction: '',
    result: 0,
    showResult: false
  }

  add = () => {
    const { resultbar } = this.state
    this.setState({
      memory: resultbar,
      resultbar: 0,
      calcAction: '+'
    })
  }

  calculate = () => {
    const { memory, resultbar, calcAction } = this.state
    if(calcAction === '+') {
      this.setState({
        result: parseInt(memory) + parseInt(resultbar),
        showResult: true
      })
    }
  }

  render() {
console.log(this.state)
    const { resultbar,
      result,
      showResult
    } = this.state

    return (
      <div className="App">
        <div style={{ border: "2px solid black", height: '40vh', width: '30vh', alignSelf: 'center', padding: '3vh' }}>
          <div style={{ border: "1px solid black", width: '95%' }}>{showResult? result : resultbar}</div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
              <button style={{width: '4vh'}}>C</button>
              <button style={{width: '4vh'}}>+/-</button>
              <button style={{width: '4vh'}}>/</button>
              <button value={'7'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>7</button>
              <button value={'8'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>8</button>
              <button value={'9'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>9</button>
              <button value={'4'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>4</button>
              <button value={'5'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>5</button>
              <button value={'6'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>6</button>
              <button value={'3'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>3</button>
              <button value={'2'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>2</button>
              <button value={'1'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>1</button>
              <button value={'0'}style={{width: '4vh'}}onClick={(e)=> this.setState({ resultbar: resultbar ==0? e.target.value : resultbar + e.target.value })}>0</button>
              <button value={'.'}style={{width: '4vh'}}>.</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <button style={{width: '4vh'}}>*</button>
              <button style={{width: '4vh'}}>-</button>
              <button style={{width: '4vh'}}onClick={()=> this.add()}>+</button>
              <button style={{width: '4vh'}}onClick={()=> this.calculate()}>=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
