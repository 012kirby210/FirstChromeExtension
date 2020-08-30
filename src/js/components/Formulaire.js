import React, { Component } from 'react';

class Formulaire extends Component {
  constructor(props){
    super(props);

    this.state = { nameValue: ''};

    this.bindAllFunction = this.bindAllFunction.bind(this);
    this.bindAllFunction();
  }

  bindAllFunction(){
    this.handleFormulaireChange = this.handleFormulaireChange.bind(this);
    this.handleFormulaireSubmit = this.handleFormulaireSubmit.bind(this);
  }



  handleFormulaireChange(event){
    this.___transmission___eventValue = event.target.value
    this.setState((state) => {
      let returnedState = state;
      returnedState.nameValue = this.___transmission___eventValue;
      return returnedState;
    } );
  }

  handleFormulaireSubmit(event){
    console.log("Valeur du champs soumis : " + this.state.nameValue);
    event.preventDefault();
  }

  render(){
    let element = (
      <form onSubmit={this.handleFormulaireSubmit}>
        <label for={this.props.formId}>{this.props.labelValue}</label>
        <input type="text" value={this.state.nameValue} onChange={this.handleFormulaireChange} />
        <input type="submit" value={this.props.buttonValue}/>
      </form>
    );
    return element;
  }
}

export { Formulaire } ;
