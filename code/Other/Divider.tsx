import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Divider as AntDivider } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 是否虚线	boolean	false
  dashed: {
    type: ControlType.Boolean
  },
  // 水平还是垂直类型	enum: horizontal vertical	horizontal
  type: {
    type: ControlType.Enum,
    options: ["horizontal", "vertical"]
  },
  title: {
    type: ControlType.String,
    hidden: props => props.type === "vertical"
  },
  // 分割线标题的位置	enum: left right	center	3.4.1
  orientation: {
    type: ControlType.Enum,
    options: ["left", "right", "center"],
    hidden: props => props.type === "vertical"
  }
};

export const Divider = props => {
  const { title, type, orientation, ...rest } = props;
  return (
    <AntDivider
      {...pick(rest, keys(controlProperty))}
      type={type}
      orientation={type === "horizontal" && orientation}
    >
      {type === "horizontal" && title}
    </AntDivider>
  );
};

Divider.defaultProps = {
  width: 435,
  height: 40,
  dashed: false,
  orientation: "center",
  type: "horizontal",
  title: "title"
};

addPropertyControls(Divider, controlProperty);
