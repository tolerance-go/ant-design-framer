import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Badge as AntBadge } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏	ReactNode
  count: { type: ControlType.Number },
  // 不展示数字，只有一个小红点	boolean	false
  dot: { type: ControlType.Boolean },
  // 设置状态点的位置偏移，格式为 [x, y]	[number, number]	-
  offsetX: { type: ControlType.Number },
  // 设置状态点的位置偏移，格式为 [x, y]	[number, number]	-
  offsetY: { type: ControlType.Number },
  // 展示封顶的数字值	number	99
  overflowCount: { type: ControlType.Number },
  // 当数值为 0 时，是否展示 Badge	boolean	false
  showZero: { type: ControlType.Boolean },
  // 在设置了 status 的前提下有效，设置状态点的文本	string	''
  text: { type: ControlType.String },
  backgroundColor: { type: ControlType.Color, hidden: props => props.text },
  // 设置 Badge 为状态点	Enum{ 'success', 'processing, 'default', 'error', 'warning' }	''
  status: {
    type: ControlType.Enum,
    options: ["success", "processing", "default", "error", "warning"],
    hidden: props => !props.text
  },
};

export const Badge = props => {
  const { offsetX, offsetY, status, color, ...rest } = props;
  return (
    <AntBadge
      {...pick(rest, keys(controlProperty))}
      offset={[offsetX, offsetY]}
      status={props.text ? status : null}
    />
  );
};

Badge.defaultProps = {
  width: 40,
  height: 40,
  // 不展示数字，只有一个小红点	boolean	false
  dot: false,
  // 展示封顶的数字值	number	99
  overflowCount: 99,
  // 当数值为 0 时，是否展示 Badge	boolean	false
  showZero: true,
  // 设置 Badge 为状态点	Enum{ 'success', 'processing, 'default', 'error', 'warning' }	''
  status: "default",
};

addPropertyControls(Badge, controlProperty);
