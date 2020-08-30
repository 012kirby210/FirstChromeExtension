import React, { Component } from 'react';
// node crypto module to generate hash
// const crypto = require('crypto');
//
// warning on bundle size must be investigated
// - maybe trouble between ESM and CJS format -

class Selection extends Component{
  constructor(props){
    super(props);

    this.state = {[this.props.selectionName]: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    let options = [];
    let key=0;
    for(let option in this.props.selectionElements){
      options.push( (<option key={key} value={option}>{this.props.selectionElements[option]}</option>) );
      key++;
    }

    let element = (
      <div>
        <div>valeur sélectionnée : {this.state[this.props.selectionName]}</div>
        <select name={this.props.selectionName} value={this.state[this.props.selectionName]} onChange={this.handleChange}>
          {options}
        </select>
      </div>

    );
    return element;
  }
}

export { Selection };
