import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Switch from './element/Switch.js';

const TOGGLE_CONTEXT = '__toggle__';

function ToggleOn({children}, context) {
  const {on} = context[TOGGLE_CONTEXT];
  return on ? children : null;
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

function ToggleOff({children}, context) {
  const {on} = context[TOGGLE_CONTEXT];
  return on ? null : children;
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

function ToggleButton(props, context) {
  const {on, toggle} = context[TOGGLE_CONTEXT];
  return <Switch onClick={toggle} on={on} {...props} />;
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

class Toggle extends React.Component {
  static defaultProps = { onToggle: () => {}}
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  state = {on: false};

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    }
  }

  toggle = () => {
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  }

  render(){
    return <div>
        {this.props.children}
      </div>
  }
}

export default Toggle;
