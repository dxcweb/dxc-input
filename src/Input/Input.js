import React, { Component } from 'react';
import Container from '../Container/Container';
const isIOS = () =>
  !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
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
  onBlur =() => {
    if (isIOS()) {
      window.scrollTo(0, window.scrollY - 1);
    }
  }
  render() {
    const { normalize, label, labelWidth, width, maxLength, placeholder, onChange, ...other } = this.props;
    const containerProps = { label, labelWidth, width, ...other };
    const value = this.getValue();
    return (
      <Container {...containerProps}>
        <input onBlur={this.onBlur} style={{ flex: 1 }} maxLength={maxLength} value={value} onChange={this.onChange} placeholder={placeholder} />
      </Container>
    );
  }
}
