import React, { Component } from 'react';
import Block from 'fs-flex';
import Container from '../Container/Container'

export default class Input extends Component {
    state = {
        value: ''
    };
    onChange = (e) => {
        const { onChange, normalize } = this.props;
        const newValue = e.target.value
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
    }
    getValue = () => {
        return this.props.value || this.state.value;
    }
    render() {
        const { label, labelWidth, width, maxLength, placeholder, onChange } = this.props;
        const containerProps = { label, labelWidth, width };
        const value = this.getValue();
        return <Container {...containerProps}>
            <Block el="input" f={1} maxLength={maxLength} value={value} onChange={this.onChange} placeholder={placeholder} className="jc ac" />
        </Container>
    }
}