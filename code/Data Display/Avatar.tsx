import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Avatar as AntAvatar } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 设置头像的图标类型，参考 Icon 组件	string	-
  icon: { type: ControlType.String },
  // 指定头像的形状	Enum{ 'circle', 'square' }	circle
  shape: { type: ControlType.Enum, options: ["circle", "square"] },
  // 设置头像的大小	number | Enum{ 'large', 'small', 'default' }	default
  size: { type: ControlType.Enum, options: ["large", "small", "default"] },
  // 图片类头像的资源地址	string	-
  src: { type: ControlType.String },
};

export const Avatar = props => {
  const { ...rest } = props;
  return <AntAvatar {...pick(rest, keys(controlProperty))} />;
};

Avatar.defaultProps = {
  width: 40,
  height: 40,
  icon: 'user',
  // 指定头像的形状	Enum{ 'circle', 'square' }	circle
  shape: "circle",
  // 设置头像的大小	number | Enum{ 'large', 'small', 'default' }	default
  size: "default"
};

addPropertyControls(Avatar, controlProperty);
