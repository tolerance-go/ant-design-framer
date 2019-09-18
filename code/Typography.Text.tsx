import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Typography as AntTypography } from "antd";
import { keys, pick } from "lodash";

const { Text: AntText, Paragraph } = AntTypography;

const controlProperty: PropertyControls = {
  content: {
    type: ControlType.String
  },
  // 是否可拷贝，为对象时可设置复制文本以回调函数	boolean | { text: string, onCopy: Function }	false	3.14.0
  copyable: {
    type: ControlType.Boolean
  },
  // 添加删除线样式	boolean	false	3.14.0
  delete: {
    type: ControlType.Boolean
  },
  // 禁用文本	boolean	false	3.14.0
  disabled: {
    type: ControlType.Boolean
  },
  // 是否可编辑，为对象时可对编辑进行控制	boolean | { editing: boolean, onStart: Function, onChange: Function(string) }	false	3.14.0
  editable: {
    type: ControlType.Boolean
  },
  // 设置自动溢出省略	boolean	false	3.14.0
  ellipsis: {
    type: ControlType.Boolean
  },
  // 添加标记样式	boolean	false	3.14.0
  mark: {
    type: ControlType.Boolean
  },
  // 添加下划线样式	boolean	false	3.14.0
  underline: {
    type: ControlType.Boolean
  },
  // 是否加粗	boolean	false	3.14.0
  strong: {
    type: ControlType.Boolean
  },
  // 文本类型	secondary, warning, danger	-	3.14.0
  type: {
    type: ControlType.Enum,
    options: ["default", "secondary", "warning", "danger"]
  }
};

export const Text = props => {
  const { content, ...rest } = props;
  return <AntText {...pick(rest, keys(controlProperty))}>{content}</AntText>;
};

Text.defaultProps = {
  content: "content",
  width: 32,
  height: 32,
  copyable: false,
  delete: false,
  disabled: false,
  editable: false,
  ellipsis: false,
  mark: false,
  underline: false,
  strong: false
};

addPropertyControls(Text, controlProperty);
