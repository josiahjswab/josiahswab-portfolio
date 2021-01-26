import React, { Component } from 'react';

export default class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.defaultValue
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({on: this.state.on ? false : true})
  }

  render() {
    return(
      <div>{this.props.render({on: this.state.on, toggle: this.toggle})}</div>
    )
  }
}

Toggler.defaultProps = {
  defaultValue: false
}
