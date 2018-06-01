import * as React from "react";
import ContainerProps from "./ContainerProps";
import PropsType from "antd-mobile/lib/picker/PropsType";

export interface SelectProps extends ContainerProps, PropsType {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
}

export default class Select extends React.Component<SelectProps, any> {}
