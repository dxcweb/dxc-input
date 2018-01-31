import React, { Component } from 'react';
import Picker from 'antd-mobile/lib/picker';
import 'antd-mobile/lib/picker/style';
import Block from 'fs-flex';
import SelectValue from './SelectValue';

export default class Temp extends Component {
    state = { value: null };
    getValue = () => {
        return this.props.value || this.state.value;
    }
    onChange = (value) => {
        this.setState({ value });
    }
    render() {
        const { label, labelWidth, placeholder, width, ...other } = this.props;
        const value = this.getValue();
        return (
            <Block w={width} mb={10}>
                <Picker onChange={this.onChange} {...other} value={value}>
                    <SelectValue value={value} label={label} labelWidth={labelWidth} placeholder={placeholder} />
                </Picker>
            </Block>
        );
    }
}
