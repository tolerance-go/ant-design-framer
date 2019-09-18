import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Menu as AntMenu } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  // 菜单类型，现在支持垂直、水平、和内嵌模式三种	string: vertical horizontal inline	vertical
  mode: {
    type: ControlType.Enum,
    options: ["vertical", "horizontal", "inline"]
  },
  // inline 时菜单是否收起状态	boolean	-
  inlineCollapsed: {
    type: ControlType.Boolean,
    hidden: props => props.mode !== "inline"
  },
  // inline 模式的菜单缩进宽度	number	24
  inlineIndent: {
    type: ControlType.Number,
    hidden: props => props.mode !== "inline"
  },
  // 当前展开的 SubMenu 菜单项 key 数组	string[]
  openKeys: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 当前选中的菜单项 key 数组	string[]
  selectedKeys: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 主题颜色	string: light dark	light
  theme: { type: ControlType.Enum, options: ["light", "dark"] }
};

export const Menu = props => {
  const { items, ...rest } = props;
  return (
    <AntMenu {...pick(props, keys(controlProperty))}>
      {items.map(item => {
        return <AntMenu.Item key={item}>{item}</AntMenu.Item>;
      })}
    </AntMenu>
  );
};

Menu.defaultProps = {
  width: 160,
  height: 200,
  items: ["item1", "item2"],
  selectedKeys: ["item1"],
  inlineIndent: 24,
  mode: "vertical",
  multiple: true,
  openKeys: [],
  theme: "light",
  inlineCollapsed: false,
};

addPropertyControls(Menu, controlProperty);
