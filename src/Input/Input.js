import React, { Component } from 'react';
import Block from 'dxc-flex';
import Container from '../Container/Container';

export default class Input extends Component {
  state = {
    value: '',
  };
  onChange = e => {
    const { onChange, normalize } = this.props;
    const newValue = e.target.value;
    let value;
    if (normalize) {
      const oldValue = this.getValue();
      value = normalize(newValue, oldValue);
    } else {
      value = newValue;
    }
    if (onChange) {
      onChange(value);
    } else {
      this.setState({ value });
    }
  };
  getValue = () => {
    return this.props.value || this.state.value;
  };
  render() {
    const { normalize, label, labelWidth, width, maxLength, placeholder, onChange, ...other } = this.props;
    const containerProps = { label, labelWidth, width, ...other };
    const value = this.getValue();
    return (
      <Container {...containerProps}>
        <input style={{ flex: 1 }} maxLength={maxLength} value={value} onChange={this.onChange} placeholder={placeholder} />
      </Container>
    );
  }
}
