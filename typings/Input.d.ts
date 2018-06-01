import * as React from "react";
import ContainerProps from "./ContainerProps";
import { normalize } from "./normalize";

export interface InputProps extends ContainerProps {
  normalize?: normalize;
  maxLength?: number;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
}

export default class Input extends React.Component<InputProps, any> {}
