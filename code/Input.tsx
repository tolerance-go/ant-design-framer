import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Input as AntInput } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  // 带标签的 input，设置后置标签	string|ReactNode
  addonAfter: {
    type: ControlType.String
  },
  // 带标签的 input，设置前置标签	string|ReactNode
  addonBefore: {
    type: ControlType.String
  },
  // 输入框默认内容	string
  placeholder: {
    type: ControlType.String
  },
  // 输入框内容	string
  value: {
    type: ControlType.String
  },
  // 是否禁用状态，默认为 false	boolean	fals
  disabled: {
    type: ControlType.Boolean
  },
  // 输入框的 id	string
  id: {
    type: ControlType.String
  },
  // 带有前缀图标的 input	string|ReactNode
  prefix: {
    type: ControlType.String
  },
  // 控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small	string	defaul
  size: {
    type: ControlType.Enum,
    options: ["large", "default", "small"]
  },
  // 带有后缀图标的 input	string|ReactNode
  suffix: {
    type: ControlType.String
  },

  // 可以点击清除图标删除内容	boolean		3.12
  allowClear: {
    type: ControlType.Boolean
  }
};

export const Input = props => {
  return <AntInput {...pick(props, keys(controlProperty))} />;
};

Input.defaultProps = {
  width: 100,
  height: 32,
  // 是否禁用状态，默认为 false	boolean	false
  disabled: false,
  // 控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small	string	defaul
  size: "default"
};

addPropertyControls(Input, controlProperty);
