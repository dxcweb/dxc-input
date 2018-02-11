import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, normalize, Select } from 'dxc-input';

class Simple extends Component {
  state = {
    value: '',
  };

  onChange = value => {
    this.setState({ value });
  };
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
      <div style={{ padding: 20 }}>
        <div style={{ margin: 20 }}>简单的</div>
        <Input className="ccc" style={{ padding: 20, width: 100 }} width={200} normalize={normalize.money} />
        <Select className="ccc" style={{ padding: 20, width: 100 }} width={200} width={200} data={data} cols={1} />
        <div style={{ margin: 20 }}>更多</div>
        <Input width={200} label="label" labelWidth={50} placeholder="啊啊啊" />
        <Select width={200} label="label" labelWidth={50} data={data} placeholder="啊啊啊" cols={1} />
        <Input width={200} label="label" labelWidth={50} placeholder="啊啊啊" />
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById('__react-content'));
