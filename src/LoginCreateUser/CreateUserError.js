import React from "react";
import {Component} from "react";

class CreateUserError extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return (
        <h2>WRONG NO NO NO NO NO</h2>
      );
    }
    return this.props.children;
  } 
}

export default CreateUserError;
