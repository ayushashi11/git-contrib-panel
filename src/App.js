import logo from './logo.svg';
import React from 'react';
import ReactTooltip from 'react-tooltip'
import './App.css';

class Square extends React.Component{
  render(){
    let styl = {
      backgroundColor: "rgba(57, 211, 83, "+(0.15+0.85*(this.props.contributions/this.props.max))+")",
      width: "10px",
      height: "10px",
      border: "1px solid black",
      borderRadius: "2px",
      position: "absolute",
      left: (this.props.padding+this.props.left*12)+'px',
      top: (this.props.padding+this.props.top*12)+'px',
    };
    return (
      <button style={styl} data-tip={this.props.contributions+" contributions"}></button>
    );
  }
}
function Board(){
  let squares = [];
  let currDate = new Date();
  let left=0, top=(new Date(currDate.getFullYear(), 1, 1)).getDay();
  let initTop = top;
  let max=12;
  let dateWidth = 2;
  let i=0;
  for(i=0; i<365; i++){
    squares.push(<Square contributions={Math.round(12*Math.random())} top={top%7} left={left+dateWidth} max={max} padding={20}/>);
    top++;
    left = Math.floor(top/7);
  }
  return (
    <div style={{padding: "20px", border: "2px solid gray", borderRadius: "10px", backgroundColor: "#333", position: 'relative', height: "84px", width: (Math.ceil((initTop+365)/7+dateWidth)*12) + 'px'}}>
      <div style={{position: "absolute", top: "20px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Mon</div>
      <div style={{position: "absolute", top: "32px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Tue</div>
      <div style={{position: "absolute", top: "44px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Wed</div>
      <div style={{position: "absolute", top: "56px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Thu</div>
      <div style={{position: "absolute", top: "68px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Fri</div>
      <div style={{position: "absolute", top: "80px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Sat</div>
      <div style={{position: "absolute", top: "92px", left: "20px", width: "24px", fontSize: "10px", color: "white"}}>Sun</div>
      {squares}
      <ReactTooltip/>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Board />
    </div>
  );
}

export default App;
