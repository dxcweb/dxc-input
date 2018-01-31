import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, normalize, Select } from 'dxc-input'
import Block from 'fs-flex'

class Simple extends Component {
  state = {
    value: ''
  };

  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    const data = [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ];
    const { value } = this.state;
    return (
      <Block p={20}>
        <Block m={20}>简单的</Block>
        <Input width={200} normalize={normalize.money} />
        <Select width={200} data={data} cols={1} />
        <Block m={20}>更多</Block>
        <Input width={200} label="label" labelWidth={50} placeholder="啊啊啊" />
        <Select width={200} label="label" labelWidth={50} data={data} placeholder="啊啊啊" cols={1} />
      </Block>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
