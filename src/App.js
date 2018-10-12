import React, { Component } from 'react';
import './App.css';
import Robot from './robot.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      goodText: ' ',
      badText: '',
      kanyeText: "your 'onye"
    }
  }
  render() {
    return (
      <div className="App">
        <Robot text={this.state} change={this.changeValue} badChange={this.badRobotConverter}/>
      </div>
    );
  }
  changeValue = (e)=>{
      this.setState({goodText: e.target.value})
      this.setState({badText: this.badRobotConverter(e)})
      this.setState({kanyeText: e.target.value})
  }
  //return a string the length of e.target.value
  badRobotConverter=(e)=>{
    let string = []
    for(let i=0;i<e.target.value.length;i++){
      if(i%3==0){
        string.push("B")
      }else if(i%3==1){
        string.push("L")
      }else{
        string.push("A")
      }
    }

    return string.join('');
  }
}

export default App;

//add input handler to link fields
