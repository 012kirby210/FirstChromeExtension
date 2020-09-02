import React, { Component } from 'react';

class LoadBay extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      fetchingState: 'idle'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    this.setState({fetchingState: 'starting'});
    console.log("chargement");
    console.log('valeur : ' + this.state.inputValue);
    let myForm = new FormData();
    myForm.append('valeur', this.state.inputValue);
    fetch(this.props.url,{
      method: this.props.method,
      body: myForm
    }).then(
      (response)=>{
        response.text().then( (text) => {
          this.props.data = text;
          this.setState({fetchingState: 'idle'});
        });
      }).catch(
        (error) => { console.log(error) ;}
      );
  }

  handleInputChange(e){
    let value = e.target.value;
    this.setState({inputValue: value});
  }

  render(){
    let element = (
      <div>
        <label for={this.props.inputId}>{this.props.inputLabel}</label>
        <input type="text" id={this.props.inputId} onChange={this.handleInputChange} value={this.state.inputValue}/>
        <button onClick={this.loadData}>{this.props.buttonLabel}</button>
        <div>{this.props.data}</div>
      </div>
    );
    return element;
  }

}

export { LoadBay };
