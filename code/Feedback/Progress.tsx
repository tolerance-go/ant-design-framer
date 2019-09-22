import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Progress as AntProgress } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 类型，可选 line circle dashboard	string	line
  type: {
    type: ControlType.Enum,
    options: ["line", "circle", "dashboard"]
  },
  canvasWidth: {
    type: ControlType.Number,
    hidden: props => props.type === "line"
  },
  // 仪表盘进度条缺口角度，可取值 0 ~ 360	number	0	3.13.1
  gapDegree: {
    type: ControlType.Number,
    hidden: props => props.type !== "dashboard"
  },
  // 仪表盘进度条缺口位置	Enum{ 'top', 'bottom', 'left', 'right' }	top	3.13.1
  gapPosition: {
    type: ControlType.Enum,
    options: ["top", "bottom", "left", "right"],
    hidden: props => props.type !== "dashboard"
  },
  // 百分比	number	0
  percent: {
    type: ControlType.Number
  },
  // 是否显示进度数值或状态图标	boolean	true
  showInfo: {
    type: ControlType.Boolean
  },
  // 状态，可选：success exception normal active(仅限 line)	string	-
  status: {
    type: ControlType.Enum,
    options: ["success", "exception", "normal", "active"]
  },
  // 	Enum{ 'round', 'square' }	round	3.8.0
  strokeLinecap: {
    type: ControlType.Enum,
    options: ["round", "square"]
  },
  // 进度条的色彩	string	-	3.7.0
  strokeColor: {
    type: ControlType.Color
  },
  // 已完成的分段百分比	number	0	3.2.0
  successPercent: {
    type: ControlType.Number
  }
};

export const Progress = props => {
  const { canvasWidth, ...rest } = props;
  return (
    <AntProgress {...pick(rest, keys(controlProperty))} width={canvasWidth} />
  );
};

Progress.defaultProps = {
  width: 435,
  height: 40,
  type: "line",
  showInfo: true,
  percent: 60,
  status: "active",
  successPercent: 20,
  strokeColor: "#2895ff",
  canvasWidth: 132,
  gapDegree: 75,
  gapPosition: "bottom"
};

addPropertyControls(Progress, controlProperty);
