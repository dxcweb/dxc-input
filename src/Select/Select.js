import React, { Component } from 'react';
import Picker from 'antd-mobile/lib/picker';
import 'antd-mobile/lib/picker/style';
import SelectValue from './SelectValue';
import Block from 'dxc-flex';

export default class Select extends Component {
  state = { value: null };
  getValue = () => {
    return this.props.value || this.state.value;
  };
  onChange = value => {
    this.setState({ value });
  };
  render() {
    const { style, className, label, labelWidth, placeholder, width, ...other } = this.props;
    const value = this.getValue();
    let newStyle;
    if (width) {
      newStyle = { ...style, width };
    } else {
      newStyle = style;
    }
    return (
      <div style={newStyle} className={className}>
        <Picker onChange={this.onChange} {...other} value={value}>
          <SelectValue value={value} label={label} labelWidth={labelWidth} placeholder={placeholder} />
        </Picker>
      </div>
    );
  }
}
