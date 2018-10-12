import React, { Component } from 'react';
import './App.css';
import Robot from './robot.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      goodText: ' ',
      badText: '',
      kanyeText: ''
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
      this.setState({kanyeText: this.kanyeBotConverter(e)})
  }
  //return a string the length of e.target.value
  badRobotConverter=(e)=>{
    let string = []
    for(let i=0;i<e.target.value.length;i++){
      if(i%3===0){
        string.push("B")
      }else if(i%3===1){
        string.push("L")
      }else{
        string.push("A")
      }
    }
    return string.join('');
  }
  kanyeBotConverter=(e)=>{
    let arr = []
    let kString = 'Imma let you finish, but Beyonce knows that ' + e.target.value;
    for(let i=0;i<e.target.value.length;i++){
      arr.push(kString[i])
    }
    return arr.join('')

  }
}

export default App;
