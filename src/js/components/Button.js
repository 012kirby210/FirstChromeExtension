import React, { Component } from 'react';

class Button extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toggled: this.props.toggled
    };
  }
  /* for now the state of the component dont evolve, the including component will */
  handleClick(e){
    e.preventDefault();
    this.setState(function(state,props){
      state.toggled = !state.toggled;
      return state;
    });
  }
  render(){
    let checkString = this.props.toggled ? "on" : "off";
    let elem = (
      <div>
      <label for={this.props.id}>{this.props.label} : </label>
      <input id={this.props.id} type="button" onClick={this.props.onClick} value={checkString}/>
      </div>
    );
    return elem;
  }
}

export { Button };
