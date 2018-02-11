import React, { Component } from 'react';
import Block from 'dxc-flex';
import Container from '../Container/Container';
import icon from './icon';

export default class Temp extends Component {
  render() {
    const { label, labelWidth, width, extra, value, placeholder, onClick } = this.props;
    const containerProps = { label, labelWidth, width };
    return (
      <Container {...containerProps}>
        <Block style={{ flex: 1 }} className="dxc-select" vertical="center" onClick={onClick}>
          {value ? <div style={{ flex: 1 }}>{extra}</div> : <div style={{ flex: 1, color: '#999' }}>{placeholder || extra}</div>}
          <img style={{ display: 'block', marginLeft: 5, width: 24 }} src={icon} />
        </Block>
      </Container>
    );
  }
}
