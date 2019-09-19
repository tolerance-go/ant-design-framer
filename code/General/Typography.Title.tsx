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

const { Text, Title: AntTitle, Paragraph } = AntTypography;

const controlProperty: PropertyControls = {
  content: {
    type: ControlType.String
  },
  //是否可拷贝，为对象时可设置复制文本以回调函数	boolean | { text: string, onCopy: Function }	false	3.14.0
  copyable: {
    type: ControlType.Boolean
  },
  //添加删除线样式	boolean	false	3.14.0
  delete: {
    type: ControlType.Boolean
  },
  //禁用文本	boolean	false	3.14.0
  disabled: {
    type: ControlType.Boolean
  },
  //是否可编辑，为对象时可对编辑进行控制	boolean | { editing: boolean, onStart: Function, onChange: Function(string) }	false	3.14.0
  editable: {
    type: ControlType.Boolean
  },
  //自动溢出省略，为对象时可设置省略行数与是否可展开等	boolean | { rows: number, expandable: boolean, onExpand: Function }	false	3.14.0
  ellipsis: {
    type: ControlType.Boolean
  },
  //重要程度，相当于 h1、h2、h3、h4	number: 1, 2, 3, 4	1	3.14.0
  level: {
    type: ControlType.Number,
    min: 1,
    max: 4,
    step: 1
  },
  //添加标记样式	boolean	false	3.14.0
  mark: {
    type: ControlType.Boolean
  },
  //添加下划线样式	boolean	false	3.14.0
  underline: {
    type: ControlType.Boolean
  },
  //文本类型	secondary, warning, danger	-	3.14.0
  type: {
    type: ControlType.Enum,
    options: ["default", "secondary", "warning", "danger"]
  }
};

export const Title = props => {
  const { content, ...rest } = props;
  return <AntTitle {...pick(rest, keys(controlProperty))}>{content}</AntTitle>;
};

Title.defaultProps = {
  content: "content",
  width: 32,
  height: 32,
  copyable: false,
  delete: false,
  disabled: false,
  editable: false,
  ellipsis: false,
  level: 1,
  mark: false,
  underline: false
};

addPropertyControls(Title, controlProperty);
