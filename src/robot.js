import React, { Component } from 'react';
import './App.css';

class Robot extends Component {
  render() {
    return (
      <div className="App">
        <p>Say something (Or not. I don{"\'"}t care)</p>
        <input id="user" onChange={this.props.change}/>
        <br/>
        <p className="heading">Good Robot</p>
        <input value={this.props.text.goodText} onChange={this.props.change}/>
        <br/>
        <p className="heading">Bad Robot</p>
        <input value={this.props.text.badText} onChange={this.props.badChange}/>
        <br/>
        <p className="heading">Kanyebot 5000</p>
        <input value={this.props.text.kanyeText} onChange={this.props.change}/>
      </div>
    );
  }
}

export default Robot;
