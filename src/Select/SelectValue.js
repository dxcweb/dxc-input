import React, { Component } from 'react';
import Block from 'fs-flex';
import Container from '../Container/Container'
import icon from './icon';

export default class Temp extends Component {
    render() {
        const { label, labelWidth, width, extra, value, placeholder, onClick } = this.props;
        const containerProps = { label, labelWidth, width };
        return (
            <Container {...containerProps}>
                <Block className="dxc-select" f={1} hf a="c" onClick={onClick}>
                    {value ? (
                        <Block f={1}>
                            {extra}
                        </Block>
                    ) : (
                            <Block f={1} fc="#999">
                                {placeholder || extra}
                            </Block>
                        )}
                    <Block ml={5} s={{ display: 'block' }} w={24} el="img" src={icon} />
                </Block>
            </Container>
        );
    }
}
