import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Tag as AntTag } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 标签是否可以关闭	boolean	false
  closable: {
    type: ControlType.Boolean
  },
  // 标签色	string	-
  customColor: {
    type: ControlType.Boolean
  },
  presetColor: {
    type: ControlType.Enum,
    options: [
      "default",
      "magenta",
      "red",
      "volcano",
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple"
    ],
    hidden: props => props.customColor
  },

  color: {
    type: ControlType.Color,
    hidden: props => !props.customColor
  },
  label: {
    type: ControlType.String
  }
};

export const Tag = props => {
  const { label, customColor, presetColor, color, ...rest } = props;
  return (
    <AntTag {...pick(rest, keys(controlProperty))} color={getColor()}>
      {label}
    </AntTag>
  );
  function getColor() {
    if (customColor) {
      return color;
    }
    if (presetColor === "default") {
      return null;
    }
    return presetColor;
  }
};

Tag.defaultProps = {
  width: 100,
  height: 100,
  closable: false,
  label: "tag",
  color: "#108ee9",
  presetColor: "default"
};

addPropertyControls(Tag, controlProperty);
