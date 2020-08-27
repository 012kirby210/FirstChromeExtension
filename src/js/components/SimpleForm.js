import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handle component state
  handleChange(event) {
    const { value } = event.target;
    this.setState( () => { return value;} );
  }

  // handle the presentation
  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default SimpleForm;
