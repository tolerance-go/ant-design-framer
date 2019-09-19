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
import { Form as AntForm } from "antd";

export const FormItemControlProperty: PropertyControls = {
  // label 标签的文本	string|ReactNode
  label: {
    type: ControlType.String
  },
  // 配合 label 属性使用，表示是否显示 label 后面的冒号	boolean	true
  colon: {
    type: ControlType.Boolean,
    hidden: props => !props.label
  },
  // 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。	string|ReactNode
  extra: {
    type: ControlType.String,
    hidden: props => !props.label
  },
  // 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用	boolean	false
  hasFeedback: {
    type: ControlType.Boolean,
    hidden: props => !props.label
  },
  // 提示信息，如不设置，则会根据校验规则自动生成	string|ReactNode
  help: {
    type: ControlType.String,
    hidden: props => !props.label
  },

  // label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}。在 3.14.0 之后，你可以通过 Form 的 labelCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。	object
  _labelCol: {
    type: ControlType.Number,
    hidden: props => !props.label
  },
  // 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol。在 3.14.0 之后，你可以通过 Form 的 wrapperCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。	object
  _wrapperCol: {
    type: ControlType.Number,
    hidden: props => !props.label
  },
  // 是否必填，如不设置，则会根据校验规则自动生成	boolean	false
  required: {
    type: ControlType.Boolean,
    hidden: props => !props.label
  },
  // 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'	string
  validateStatus: {
    type: ControlType.Enum,
    options: ["success", "warning", "error", "validating"],
    hidden: props => !props.label
  }
};

export const FormItemDefaults = {
  required: false,
  hasFeedback: false,
  colon: true,
  _labelCol: 6,
  _wrapperCol: 18
};
