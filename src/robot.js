import React, { Component } from 'react';
import './App.css';

class Robot extends Component {
  render() {
    return (
      <div className="Robot">
          <div className="box">
              <h2 className="heading">Say something (Or not. I don{"\'"}t care)</h2>
              <input id="user" onChange={this.props.change}/>
              <br/><br/>
          </div>
          <div className="box">
              <h2 className="heading">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51s0Nl7DVSL._SL500_AC_SS350_.jpg"
                  alt="Wall-E"
                  title="Good Robot"
                  align="middle"
                  />
                  Good Robot
              </h2>
              <input value={this.props.text.goodText} onChange={this.props.change}/>
              <br/><br/>
          </div>
          <div className="box">
              <h2 className="heading">
                  Bad Robot
                  <img src="http://rl337.org/wp-content/uploads/2012/07/ai-terminator.jpg"
                  alt="Evil Robot from Terminator 2"
                  title="Bad Robot"
                  align="middle"
                  />
              </h2>
              <input value={this.props.text.badText} onChange={this.props.badChange}/>
              <br/><br/>
          </div>
          <div className="box">
              <h2 className="heading">
                  <img src="https://www.billboard.com/files/styles/article_main_image/public/media/kanye-west-taylor-swift-2009-vmas-billboard-650.jpg"
                  alt="Kanye West"
                  title="Kanyebot 5000"
                  align="middle"/>
                  Kanyebot 5000
              </h2>
              <input value={this.props.text.kanyeText} onChange={this.props.change}/>
              <br/><br/>
          </div>
      </div>
    );
  }
}

export default Robot;
