import React, { Component } from 'react';
import './App.css';

class Robot extends Component {
  render() {
    return (
      <div className="App">
        <p>Say something (I{"\'"}m giving up on you)</p>
        <input onChange={this.props.change}/>
        <br/>
        <p className="heading">Good Robot</p>
        Did you say <input value={this.props.text.goodText} onChange={this.props.change}/>?
        <br/>
        <p className="heading">Bad Robot</p>
        Did you say <input value={this.props.text.badText} onChange={this.props.badChange}/>?
        <br/>
        <p className="heading">Kanyebot 5000</p>
        //kanyebot's string
      </div>
    );
  }
}

export default Robot;
