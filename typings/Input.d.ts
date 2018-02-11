import * as React from 'react';
import ContainerProps from './ContainerProps';

export interface InputProps extends ContainerProps {
  normalize: () => void;
  maxLength: number;
  value: string;
  onChange: () => void;
  placeholder: string;
}

export default class Input extends React.Component<InputProps, any> {}
