import React, { Component } from 'react';

class Toggle extends Component {
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
    const {component: C, ...props} = this.props
    return(
      <C on={this.state.on} toggle={this.toggle} {...props}/>
    )
  }
}

export function withToggle(component, settingsObj) {
  return function(props) {
    return(
      <Toggle component={component} defaultValue={settingsObj.defaultValue} {...props} />
    )
  }
}