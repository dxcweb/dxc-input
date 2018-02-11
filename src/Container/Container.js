import React, { Component } from 'react';
import Block from 'dxc-flex';
import '../../assets/base.less';

export default class Container extends Component {
  render() {
    const { className, label, labelWidth, width, children, style = {}, ...other } = this.props;
    let newStyle;
    if (width) {
      newStyle = { ...style, width };
    } else {
      newStyle = style;
    }
    let newClassName = 'dxc-input-container';
    if (className) {
      newClassName += ` ${className}`;
    }
    return (
      <div>
        <Block style={newStyle} {...other} className={newClassName}>
          <Block style={{ width: labelWidth }} horizontal="center" vertical="center">
            {label}
          </Block>
          <Block horizontal style={{ flex: 1 }} className="dxc-input-box">
            {children}
          </Block>
        </Block>
        <div style={{ height: 10 }} />
      </div>
    );
  }
}
