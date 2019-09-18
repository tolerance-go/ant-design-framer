import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Icon as AntIcon } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  type: { type: ControlType.String },
  theme: {
    type: ControlType.Enum,
    options: ["filled", "outlined", "twoTone"]
  },
  spin: { type: ControlType.Boolean },
  rotate: { type: ControlType.Number, min: 0, max: 360 },
  twoToneColor: { type: ControlType.String }
};

export const Icon = props => {
  return <AntIcon {...pick(props, keys(controlProperty))} />;
};

Icon.defaultProps = {
  width: 32,
  height: 32,
  type: "heart",
  theme: "filled",
  spin: false,
  rotate: 0
};

addPropertyControls(Icon, controlProperty);
