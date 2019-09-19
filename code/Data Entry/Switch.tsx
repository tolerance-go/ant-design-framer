import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Switch as AntSwitch } from "antd";
import { keys, pick } from "lodash";
import { Form as AntForm } from "antd";
import { FormItemControlProperty, FormItemDefaults } from "../common/FormItem";

const controlProperty: PropertyControls = {
  // 指定当前是否选中	boolean	false
  checked: {
    type: ControlType.Boolean
  },
  // 选中时的内容	string|ReactNode
  checkedChildren: {
    type: ControlType.String
  },
  // 是否禁用	boolean	false	3.2.2
  disabled: {
    type: ControlType.Boolean
  },
  // 加载中的开关	boolean	false
  loading: {
    type: ControlType.Boolean
  },
  // 非选中时的内容	string|ReactNode
  unCheckedChildren: {
    type: ControlType.String
  },
  // 开关大小，可选值：default small	string	default
  size: {
    type: ControlType.Enum,
    options: ["large", "default", "small"]
  },

  ...FormItemControlProperty
};

export const Switch = props => {
  const { _labelCol, _wrapperCol, ...rest } = props;

  if (!rest.label) {
    return <AntSwitch {...pick(rest, keys(controlProperty))} />;
  }

  return (
    <AntForm.Item
      {...pick(rest, keys(FormItemControlProperty))}
      labelCol={{ span: _labelCol }}
      wrapperCol={{ span: _wrapperCol }}
    >
      <AntSwitch {...pick(rest, keys(controlProperty))} />
    </AntForm.Item>
  );
};

Switch.defaultProps = {
  width: 100,
  height: 32,
  size: "default",
  // 禁用	boolean	false
  disabled: false,
  // 指定当前是否选中	boolean	false
  checked: false,
  // 加载中的开关	boolean
  loading: false,
  ...FormItemDefaults
};

addPropertyControls(Switch, controlProperty);
