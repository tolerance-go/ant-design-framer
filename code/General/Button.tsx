import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Button as AntBtn } from "antd";
import { isEmpty } from "lodash";
import { pick, keys } from "lodash";

const controlProperty: PropertyControls = {
  label: { type: ControlType.String },
  icon: { type: ControlType.String },
  type: {
    type: ControlType.Enum,
    options: ["default", "primary", "danger", "link", "dashed"]
  },
  size: {
    type: ControlType.SegmentedEnum,
    options: ["default", "small", "large"]
  },
  loading: { type: ControlType.Boolean },
  block: { type: ControlType.Boolean },
  shape: {
    type: ControlType.SegmentedEnum,
    options: ["default", "circle", "round"]
  },
  disabled: { type: ControlType.Boolean },
  ghost: { type: ControlType.Boolean },
};

export const Button = props => {
  const { children, label, ...rest } = props;
  return (
    <AntBtn {...pick(rest, keys(controlProperty))}>
      {isEmpty(children) ? label : children}
    </AntBtn>
  );
};

Button.defaultProps = {
  width: 71,
  height: 32,
  label: "button",
  type: "primary",
  size: "default",
  shape: "default",
  loading: false,
  block: false,
  disabled: false,
  ghost: false,
  onClick: () => {}
};

addPropertyControls(Button, controlProperty);
