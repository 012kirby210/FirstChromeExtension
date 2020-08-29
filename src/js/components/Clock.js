import React, { Component } from 'react';
import { Button } from './Button.js';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { date: new Date() };
    this.handleActivationClock = this.handleActivationClock.bind(this);
    this.ClockNamespace = {isToggled: true};
  }
  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount(){
    if (this.ClockNamespace.isToggled){
      clearInterval(this.timerId);
    }
  }
  handleActivationClock(){
    if (!this.ClockNamespace.isToggled){
      this.timerId = setInterval(
        () => this.tick(),1000
      );
      this.ClockNamespace.isToggled = true;
    }else{
      clearInterval(this.timerId);
      this.ClockNamespace.isToggled = false;
      /* last tick */
      this.tick();
    }
  }
  tick(){
    this.setState({
      date: new Date() });
  }
  render(){
    let element = (
      <div>
        <Button id="clock-toggle-button" label="Mise en route de l'horloge" toggled={ this.ClockNamespace.isToggled } onClick={this.handleActivationClock}/>
        <div>Il est {this.state.date.toLocaleString()}</div>
      </div>
    );
    return element;
  }
}

export { Clock };
