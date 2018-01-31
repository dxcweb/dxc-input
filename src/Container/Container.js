import React, { Component } from 'react';
import Block from 'fs-flex';
import '../../assets/base.less'

export default class Container extends Component {
    render() {
        const { label, labelWidth, width, children } = this.props;
        return (
            <Block w={width} hf className="dxc-input-container">
                <Block w={labelWidth} a="c" j="e">
                    {label}
                </Block>
                <Block hf f={1} className="dxc-input-box">
                    {children}
                </Block>
            </Block>
        );
    }
}