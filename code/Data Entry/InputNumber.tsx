import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { InputNumber as AntInputNumber } from "antd";
import { keys, pick } from "lodash";
import { Form as AntForm } from "antd";
import { FormItemControlProperty, FormItemDefaults } from "../common/FormItem";

const controlProperty: PropertyControls = {
  // 禁用	boolean	false
  disabled: {
    type: ControlType.Boolean
  },
  // 当前值	number
  value: {
    type: ControlType.Number
  },
  // 数值精度	number	-
  precision: {
    type: ControlType.Number
  },
  // 小数点	string	-	3.10.0
  decimalSeparator: {
    type: ControlType.String
  },
  // 输入框大小	string	无
  size: {
    type: ControlType.Enum,
    options: ["large", "default", "small"]
  },

  ...FormItemControlProperty
};

export const InputNumber = props => {
  const { _labelCol, _wrapperCol, ...rest } = props;

  if (!rest.label) {
    return <AntInputNumber {...pick(rest, keys(controlProperty))} />;
  }

  return (
    <AntForm.Item
      {...pick(rest, keys(FormItemControlProperty))}
      labelCol={{ span: _labelCol }}
      wrapperCol={{ span: _wrapperCol }}
    >
      <AntInputNumber {...pick(rest, keys(controlProperty))} />
    </AntForm.Item>
  );
};

InputNumber.defaultProps = {
  width: 100,
  height: 32,
  size: "default",
  // 禁用	boolean	false
  disabled: false,
  ...FormItemDefaults
};

addPropertyControls(InputNumber, controlProperty);
